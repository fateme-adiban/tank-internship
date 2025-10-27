export type Phase = "guessing" | "watching" | "showing_result"
export type Guess = "up" | "down"
export type Result = "win" | "lose"

export interface GuessRecord {
  time: number
  price: number
  guess: Guess
}

export interface GameState {
  phase: Phase
  startPrice: number
  currentPrice: number
  guess?: Guess
  result?: Result
  streak: number
  basePrize: number
  currentPrize: number
  timeLeft: number
  guesses: GuessRecord[]
  hasGuessed: boolean
  lastAttemptIndex: number
}

export type GameAction =
  | { type: "SET_PRICE"; price: number }
  | { type: "TICK" }
  | { type: "MAKE_GUESS"; guess: Guess; priceAtGuess: number }
  | { type: "SHOW_RESULT" }
  | { type: "RESET_ROUND" }

export const gameReducer = (
  state: GameState,
  action: GameAction,
): GameState => {
  switch (action.type) {
    case "SET_PRICE":
      return { ...state, currentPrice: action.price }

    case "MAKE_GUESS":
      if (state.phase !== "guessing") return state

      const newGuess: GuessRecord = {
        time: Date.now(),
        price: action.priceAtGuess,
        guess: action.guess,
      }

      return {
        ...state,
        phase: "watching",
        guess: action.guess,
        startPrice: action.priceAtGuess,
        guesses: [...state.guesses, newGuess],
        timeLeft: 15,
      }

    case "TICK":
      if (state.timeLeft <= 1) {
        if (state.phase === "watching") {
          return gameReducer(state, { type: "SHOW_RESULT" })
        }

        if (state.phase === "showing_result") {
          if (state.result === "win") {
            return {
              ...state,
              phase: "guessing",
              timeLeft: 30,
              guess: undefined,
              result: undefined,
              hasGuessed: false,
              basePrize: state.basePrize + state.currentPrize,
              currentPrize: 0,
            }
          }

          return state
        }
      }

      if (state.timeLeft > 0) {
        return { ...state, timeLeft: state.timeLeft - 1 }
      }

      return state

    case "SHOW_RESULT": {
      if (state.phase !== "watching" || !state.guess) return state

      const startPrice = state.startPrice
      const endPrice = state.currentPrice

      const realDirection: Guess = endPrice > startPrice ? "up" : "down"
      const didWin = realDirection === state.guess

      const newPrize = didWin
        ? state.streak > 0
          ? state.currentPrize * 2
          : state.basePrize
        : 0

      return {
        ...state,
        result: didWin ? "win" : "lose",
        streak: didWin ? state.streak + 1 : 0,
        currentPrize: newPrize,
        phase: "showing_result",
        timeLeft: 3,
      }
    }

    case "RESET_ROUND":
      return {
        ...state,
        phase: "guessing",
        guess: undefined,
        result: undefined,
        timeLeft: 30,
        currentPrize: 0,
        streak: 0,
        lastAttemptIndex: -1,
        hasGuessed: false,
        basePrize: 0.005,
        guesses: [],
      }

    default:
      return state
  }
}
