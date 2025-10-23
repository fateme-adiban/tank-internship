import { render, screen, fireEvent, act } from "@testing-library/react"
import { Pump } from "../src/components/Pump"

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = ResizeObserver

jest.mock("../lib/priceSimulator", () => ({
  priceGenerator: jest.fn(() => {
    let price = 1800
    return {
      next: () => ({ value: (price += 10), done: false }),
    }
  }),
}))

jest.mock("recharts", () => {
  const OriginalRecharts = jest.requireActual("recharts")
  return {
    ...OriginalRecharts,
    ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
  }
})

jest.useFakeTimers()

describe("Pump integration test", () => {
  beforeEach(() => {
    jest.clearAllTimers()
    jest.resetModules()
  })

  it("renders the game UI correctly", () => {
    render(<Pump />)

    expect(
      screen.getByRole("button", { name: /بالا میره/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /پایین میاد/i }),
    ).toBeInTheDocument()

    expect(screen.getByTestId("prize-bar")).toBeInTheDocument()
    expect(screen.getByTestId("price-chart")).toBeInTheDocument()
    expect(screen.getByTestId("timer")).toBeInTheDocument()
  })

  it("handles guessing and updates prize and phase", () => {
    render(<Pump />)
    const upButton = screen.getByRole("button", { name: /بالا میره/i })

    fireEvent.click(upButton)

    act(() => {
      jest.advanceTimersByTime(15000)
    })

    const timer = screen.getByTestId("timer")
    const prize = screen.getByTestId("prize-value")

    expect(timer.textContent).toBe("تا شروع بازی۰۰: ۳")

    expect(parseFloat(prize.textContent || "0")).toBeCloseTo(0.005)
  })

  it("resets round after showing result", () => {
    render(<Pump />)
    const upButton = screen.getByRole("button", { name: /بالا میره/i })

    fireEvent.click(upButton)
    act(() => jest.advanceTimersByTime(15000))
    act(() => jest.advanceTimersByTime(3000))

    const timer = screen.getByTestId("timer")
    expect(timer.textContent).toContain("۰۰: ۳۰")
  })

  it("handles timer running out without guess", () => {
    render(<Pump />)
    act(() => jest.advanceTimersByTime(30000))
    const timer = screen.getByTestId("timer")

    expect(timer.textContent).toContain("۰۰: ۰")
  })

  it("does not carry over prize between rounds", () => {
    render(<Pump />)
    const upButton = screen.getByRole("button", { name: /بالا میره/i })

    fireEvent.click(upButton)
    act(() => jest.advanceTimersByTime(15000))
    act(() => jest.advanceTimersByTime(3000))

    let prize = screen.getByTestId("prize-value")
    expect(parseFloat(prize.textContent || "0")).toBeCloseTo(0.005)

    act(() => jest.advanceTimersByTime(1000))
    prize = screen.getByTestId("prize-value")
    expect(parseFloat(prize.textContent || "0")).toBeCloseTo(0.005)
  })

  it("resets prize and streak on wrong guess", () => {
    render(<Pump />)
    const downButton = screen.getByRole("button", { name: /پایین میاد/i })

    fireEvent.click(downButton)
    act(() => jest.advanceTimersByTime(15000))
    act(() => jest.advanceTimersByTime(3000))

    const prize = screen.getByTestId("prize-value")
    expect(parseFloat(prize.textContent || "0")).toBeCloseTo(0.005)
  })

  // it("doubles prize on consecutive correct guesses", () => {
  //   render(<Pump />)
  //   const upButton = screen.getByRole("button", { name: /بالا میره/i })

  //   // First correct guess
  //   fireEvent.click(upButton)
  //   act(() => jest.advanceTimersByTime(15000))
  //   act(() => jest.advanceTimersByTime(3000)) // show result

  //   let prize = screen.getByTestId("prize-value")
  //   expect(parseFloat(prize.textContent || "0")).toBeCloseTo(0.005)

  //   // Second correct guess
  //   fireEvent.click(upButton)
  //   act(() => jest.advanceTimersByTime(15000))
  //   act(() => jest.advanceTimersByTime(3000)) // show result

  //   prize = screen.getByTestId("prize-value")
  //   expect(parseFloat(prize.textContent || "0")).toBeCloseTo(0.01) // doubled
  // })
})
