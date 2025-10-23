import { RiErrorWarningLine } from "react-icons/ri"
import { cn } from "../../lib/utils"

export default function Timer({
  phase,
  timeLeft,
  guess,
  "data-testid": testId,
}: {
  phase: string
  timeLeft: number
  guess?: "up" | "down"
  "data-testid"?: string
}) {
  const phaseLabel =
    phase === "guessing"
      ? "تا پایان زمان تصمیم‌گیری"
      : phase === "watching"
        ? "تا مشخص شدن پیش‌بینی"
        : "تا شروع بازی"

  return (
    <div
      data-testid={testId}
      className="flex flex-col justify-center items-center mt-15 font-bold gap-2 font-vazirmatn"
    >
      <div
        role="timer"
        aria-live="polite"
        className="text-white text-[16px] justify-center items-center flex gap-2 mb-2"
      >
        <span>{phaseLabel}</span>
        <span
          className={cn(
            "text-2xl",
            timeLeft <= 10 ? "text-red-500" : "text-white",
          )}
        >
          ۰۰: {Math.max(0, timeLeft).toLocaleString("fa-IR")}
        </span>
      </div>

      {phase === "watching" && guess && (
        <div
          role="status"
          aria-live="polite"
          className="text-white text-sm sm:text-lg"
        >
          <span>پیش‌بینی شما </span>
          <span className={guess === "up" ? "text-green-500" : "text-red-500"}>
            {guess === "up" ? "بالا" : "پایین"}
          </span>
          <span> رفتن قیمت اتریومه</span>
        </div>
      )}

      {phase === "guessing" && (
        <div
          role="note"
          className="flex justify-center items-center text-gray-400 text-[10px] sm:text-xs gap-1.5"
        >
          <span>تو این مرحله، قیمت ۱۵ ثانیه آینده رو پیش‌بینی کن</span>
          <RiErrorWarningLine />
        </div>
      )}
    </div>
  )
}
