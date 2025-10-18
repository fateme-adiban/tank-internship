"use client"
import { cn } from "../../lib/utils"
import { Spotlight } from "../components/ui/Spotlight"
import { RxCross2 } from "react-icons/rx"
import React, { useReducer, useRef, useEffect, useState } from "react"
import { gameReducer, GameState } from "../../lib/gameReducer"
import { priceGenerator } from "../../lib/priceSimulator"
import PriceChart from "./PriceChart"
import Timer from "./Timer"
import GameControls from "./GameControls"
import ResultBanner from "./ResultBanner"
import PrizeBar from "./PrizeBar"
import { stat } from "fs"

export const Pump = () => {
  const [state, dispatch] = useReducer(gameReducer, {
    phase: "guessing",
    startPrice: 1800,
    currentPrice: 1800,
    streak: 0,
    basePrize: 0.005,
    currentPrize: 0,
    timeLeft: 30,
    guesses: [],
  })

  const [priceHistory, setPriceHistory] = useState<number[]>([
    state.currentPrice,
  ])

  const priceGenRef = useRef<Generator<number>>(priceGenerator(42))

  useEffect(() => {
    const interval = setInterval(() => {
      const next = priceGenRef.current.next()
      const newPrice = next.value ?? 1800

      setPriceHistory((prev) => [...prev.slice(-59), newPrice])

      dispatch({ type: "SET_PRICE", price: newPrice })
      dispatch({ type: "TICK" })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (state.phase === "watching" && state.timeLeft <= 0) {
      dispatch({ type: "SHOW_RESULT" })
    }

    if (state.phase === "showing_result") {
      const timeout = setTimeout(() => {
        dispatch({ type: "RESET_ROUND" })
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [state.phase, state.timeLeft])

  const handleGuess = (guess: "up" | "down") => {
    if (state.phase !== "guessing") return
    dispatch({ type: "MAKE_GUESS", guess, priceAtGuess: state.currentPrice })
  }

  return (
    <div className="relative flex h-screen p-5 md:p-0 w-full items-center justify-center bg-[#02305d] overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 filter blur-[0.5px]",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#08355f_3px,transparent_1px),linear-gradient(to_bottom,#08355f_4px,transparent_1px)]",
        )}
      />

      <Spotlight className="-top-40 left-0 md:-top-20 md:left-80" />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-20" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>

      <div className="relative flex flex-col z-20 w-[90%] md:w-md h-[90vh]">
        <div className="flex items-center text-white gap-3 justify-end font-vazirmatn font-bold text-lg">
          <p>بازی پامپ</p>
          <div
            onClick={() => window.location.reload()}
            className="w-6 h-6 flex justify-center items-center bg-red-500 rounded-[5px] cursor-pointer shadow-lg hover:shadow-inner active:translate-y-[1px] transition-all duration-150"
          >
            <RxCross2 />
          </div>
        </div>

        <PrizeBar
          streak={state.streak}
          currentPrize={state.currentPrize}
          basePrize={state.basePrize}
          maxMultiplier={5}
        />

        <div className="flex flex-col justify-between mt-20 p-4 space-y-4">
          <div className="flex items-center justify-center">
            <PriceChart
              prices={priceHistory}
              priceAtGuess={
                state.guess
                  ? state.guesses[state.guesses.length - 1]?.price
                  : undefined
              }
            />
          </div>

          <Timer
            guess={state.guess}
            phase={state.phase}
            timeLeft={state.timeLeft}
          />

          <GameControls
            currentPrice={state.currentPrice}
            priceAtGuess={
              state.guess
                ? state.guesses[state.guesses.length - 1]?.price
                : undefined
            }
            phase={state.phase}
            disabled={state.phase !== "guessing"}
            onGuess={handleGuess}
          />

          {state.phase === "showing_result" && (
            <ResultBanner dispatch={dispatch} result={state.result!} />
          )}
        </div>
      </div>
    </div>
  )
}
