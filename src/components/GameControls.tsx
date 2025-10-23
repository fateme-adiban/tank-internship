import { ImArrowDown } from "react-icons/im"
import { ImArrowUp } from "react-icons/im"
import { Phase } from "../../lib/gameReducer"

interface GameControlsProps {
  phase: Phase
  disabled: boolean
  currentPrice: number
  priceAtGuess?: number
  onGuess: (guess: "up" | "down") => void
}

export default function GameControls({
  phase,
  disabled,
  currentPrice,
  priceAtGuess,
  onGuess,
}: GameControlsProps) {
  if (phase === "watching") {
    return (
      <div className="flex justify-center space-x-2 font-vazirmatn mt-3 text-[15px] font-bold">
        <button
          disabled={disabled}
          className=" flex justify-center items-center gap-2 bg-gradient-to-b from-blue-500 to-blue-700 text-white px-6 py-2 sm:py-1 rounded-4xl text-[10px] sm:text-[15px]"
          onClick={() => onGuess("down")}
        >
          <span>الان: {currentPrice.toLocaleString("fa-IR")} </span>
        </button>

        <button
          disabled={disabled}
          className=" flex justify-center items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 px-7 py-2 sm:py-1 rounded-4xl text-[10px] sm:text-[15px]"
          onClick={() => onGuess("up")}
        >
          {priceAtGuess !== undefined && (
            <span> شروع: {priceAtGuess.toFixed(2)}</span>
          )}
        </button>
      </div>
    )
  }

  if (phase === "showing_result") return null

  return (
    <div className="flex space-x-2 font-vazirmatn mt-3 text-sm sm:text-xl font-bold ">
      <button
        disabled={disabled}
        aria-label="حدس بزن قیمت پایین می‌آید"
        className={`flex-1 flex justify-center items-center gap-2 bg-gradient-to-b from-red-500 to-red-700 text-white py-1 sm:py-2 rounded ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => onGuess("down")}
      >
        پایین میاد
        <ImArrowDown />
      </button>

      <button
        disabled={disabled}
        aria-label="حدس بزن قیمت بالا می‌رود"
        className={`flex-1 flex justify-center items-center gap-2 bg-gradient-to-b from-green-500 to-green-700 text-white py-1 sm:py-2 rounded ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => onGuess("up")}
      >
        بالا میره
        <ImArrowUp />
      </button>
    </div>
  )
}
