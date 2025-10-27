import { test, expect } from "@playwright/test"

test.describe("Pump E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/")
  })

  test.setTimeout(60000)

  test("consecutive correct guesses double the prize", async ({ page }) => {
    const upButton = page.getByRole("button", { name: "بالا میره" })
    const prize = page.getByTestId("prize-value")
    const timer = page.getByTestId("timer")

    await upButton.click()
    await expect(prize).toHaveText("0.005", { timeout: 20000 })

    await upButton.click()
    await expect(prize).toHaveText("0.02", { timeout: 20000 })
    await expect(timer).toContainText("۰۰: ۳۰", { timeout: 10000 })
  })

  test("wrong guess resets streak and prize", async ({ page }) => {
    const downButton = page.getByRole("button", { name: "پایین میاد" })
    const prize = page.getByTestId("prize-value")
    const timer = page.getByTestId("timer")

    await downButton.click()
    await expect(prize).toHaveText("0.005", { timeout: 25000 })
    await expect(timer).toContainText("۰۰: ۳۰", { timeout: 20000 })
  })
})
