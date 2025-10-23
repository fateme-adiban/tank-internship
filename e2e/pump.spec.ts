import { test, expect } from "@playwright/test"

test.describe("Pump E2E", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the Pump page before each test
    await page.goto("/pump") // adjust the URL to your app route
  })

  test("consecutive correct guesses double the prize", async ({ page }) => {
    const upButton = page.locator("button", { hasText: "بالا میره" })
    const prize = page.locator('[data-testid="prize-value"]')
    const timer = page.locator('[data-testid="timer"]')

    // First guess: Up
    await upButton.click()

    // Wait for watching phase + result
    await page.waitForTimeout(18000) // 15s watching + 3s result

    // Check prize is base prize
    await expect(prize).toHaveText("0.005")

    // Second guess: Up
    await upButton.click()
    await page.waitForTimeout(18000) // watching + result

    // Check prize doubled
    await expect(prize).toHaveText("0.01")

    // Optional: Check timer reset
    await expect(timer).toContainText("۰۰: ۳۰")
  })

  test("wrong guess resets streak and prize", async ({ page }) => {
    const downButton = page.locator("button", { hasText: "پایین میاد" })
    const prize = page.locator('[data-testid="prize-value"]')
    const timer = page.locator('[data-testid="timer"]')

    // Make wrong guess (assuming price goes up)
    await downButton.click()
    await page.waitForTimeout(18000) // watching + result

    // Prize should reset (0)
    await expect(prize).toHaveText("0")

    // Streak should reset to 0
    // If streak is not visible, you can check via DOM or prize bar active step
    // Example: check the first prize step is active (streak 0)
    const firstStep = page.locator('[data-testid="prize-bar"] div').first()
    await expect(firstStep).toHaveClass(/scale-\[1\]/) // active first step

    // Timer should reset for next round
    await expect(timer).toContainText("۰۰: ۳۰")
  })
})
