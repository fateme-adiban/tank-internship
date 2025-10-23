import { gameReducer, GameState, Guess } from "../lib/gameReducer"

describe("GameReducer - prize & streak logic", () => {
  const baseState: GameState = {
    phase: "guessing",
    startPrice: 1800,
    currentPrice: 1800,
    guess: undefined,
    result: undefined,
    streak: 0,
    basePrize: 0.005,
    currentPrize: 0,
    timeLeft: 30,
    guesses: [],
    hasGuessed: false,
    lastAttemptIndex: -1,
  }

  it("should set win on correct guess and reset prize on first streak", () => {
    const stateAfterGuess = gameReducer(baseState, {
      type: "MAKE_GUESS",
      guess: "up" as Guess,
      priceAtGuess: 1800,
    })

    const finalState = gameReducer(
      { ...stateAfterGuess, currentPrice: 1820 },
      { type: "SHOW_RESULT" },
    )

    expect(finalState.result).toBe("win")
    expect(finalState.streak).toBe(1)
    expect(finalState.currentPrize).toBe(0.005)
  })

  it("should double prize on consecutive win", () => {
    const stateWithStreak: GameState = {
      ...baseState,
      streak: 1,
      currentPrize: 0.005,
      phase: "watching",
      guess: "up",
      startPrice: 1820,
      currentPrice: 1820,
    }

    const finalState = gameReducer(
      { ...stateWithStreak, currentPrice: 1840 },
      { type: "SHOW_RESULT" },
    )

    expect(finalState.result).toBe("win")
    expect(finalState.streak).toBe(2)
    expect(finalState.currentPrize).toBe(0.01)
  })

  it("should reset streak and prize on wrong guess", () => {
    const stateWithStreak: GameState = {
      ...baseState,
      streak: 2,
      currentPrize: 0.01,
      phase: "watching",
      guess: "down",
      startPrice: 1800,
      currentPrice: 1800,
    }

    const finalState = gameReducer(
      { ...stateWithStreak, currentPrice: 1820 },
      { type: "SHOW_RESULT" },
    )

    expect(finalState.result).toBe("lose")
    expect(finalState.streak).toBe(0)
    expect(finalState.currentPrize).toBe(0)
  })

  it("SET_PRICE updates currentPrice", () => {
    const newState = gameReducer(baseState, { type: "SET_PRICE", price: 1820 })
    expect(newState.currentPrice).toBe(1820)
  })

  it("MAKE_GUESS sets guess, phase to watching, and startPrice", () => {
    const newState = gameReducer(baseState, {
      type: "MAKE_GUESS",
      guess: "up",
      priceAtGuess: 1800,
    })

    expect(newState.guess).toBe("up")
    expect(newState.phase).toBe("watching")
    expect(newState.startPrice).toBe(1800)
    expect(newState.timeLeft).toBe(15)
  })

  it("TICK decrements timeLeft or triggers SHOW_RESULT", () => {
    const state: GameState = {
      ...baseState,
      phase: "watching",
      timeLeft: 1,
      guess: "up",
      startPrice: 1800,
      currentPrice: 1820,
    }

    const newState = gameReducer(state, { type: "TICK" })
    expect(newState.phase).toBe("showing_result")
    expect(newState.timeLeft).toBe(3)
  })

  it("SHOW_RESULT calculates win correctly and doubles prize for streak > 0", () => {
    const state: GameState = {
      ...baseState,
      phase: "watching",
      guess: "up",
      startPrice: 1800,
      currentPrice: 1820,
      streak: 1,
      currentPrize: 0.005,
    }

    const newState = gameReducer(state, { type: "SHOW_RESULT" })

    expect(newState.result).toBe("win")
    expect(newState.streak).toBe(2)
    expect(newState.currentPrize).toBe(0.01)
    expect(newState.phase).toBe("showing_result")
    expect(newState.timeLeft).toBe(3)
  })

  it("SHOW_RESULT resets streak and prize on lose", () => {
    const state: GameState = {
      ...baseState,
      phase: "watching",
      guess: "down",
      startPrice: 1800,
      currentPrice: 1820,
      streak: 2,
      currentPrize: 0.01,
    }

    const newState = gameReducer(state, { type: "SHOW_RESULT" })

    expect(newState.result).toBe("lose")
    expect(newState.streak).toBe(0)
    expect(newState.currentPrize).toBe(0)
    expect(newState.phase).toBe("showing_result")
  })

  it("RESET_ROUND resets game state", () => {
    const state: GameState = {
      ...baseState,
      phase: "showing_result",
      streak: 2,
      currentPrize: 0.01,
      guess: "up",
      result: "win",
    }

    const newState = gameReducer(state, { type: "RESET_ROUND" })
    expect(newState.phase).toBe("guessing")
    expect(newState.streak).toBe(0)
    expect(newState.currentPrize).toBe(0)
    expect(newState.guess).toBeUndefined()
    expect(newState.result).toBeUndefined()
    expect(newState.timeLeft).toBe(30)
  })
})
