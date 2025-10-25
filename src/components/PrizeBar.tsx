"use client"
import { motion } from "framer-motion"
import { Check, ArrowDown } from "lucide-react"
import { ImCross } from "react-icons/im"
import { IoIosArrowForward } from "react-icons/io"
import React from "react"

interface PrizeBarProps {
  basePrize: number
  streak: number
  maxMultiplier?: number
  hasGuessed: boolean
  lastAttemptIndex?: number
  phase: "guessing" | "watching" | "showing_result"
  "data-testid"?: string
}

function formatPrize(value: number) {
  const prize = value.toFixed(6)
  return prize.replace(/\.?0+$/, "")
}

const PrizeBar: React.FC<PrizeBarProps> = ({
  phase,
  basePrize,
  streak,
  maxMultiplier = 36,
  hasGuessed,
  lastAttemptIndex = -1,
  "data-testid": testId,
}) => {
  const steps = Array.from({ length: maxMultiplier }, (_, i) => {
    const value = basePrize * Math.pow(2, i)
    return Number(value.toFixed(6))
  })

  const currentIndex = hasGuessed
    ? (lastAttemptIndex ?? -1)
    : Math.min(streak, steps.length - 1)

  const shouldActivate = hasGuessed || streak > 0

  return (
    <div
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={steps.length}
      aria-valuenow={currentIndex + 1}
      data-testid={testId}
      className="relative w-full flex flex-col mt-10"
    >
      <span data-testid="prize-value" className="sr-only">
        {steps[currentIndex]}
      </span>

      <div className="absolute left-1/2 -top-3 transform -translate-x-1/2 px-2 py-1 bg-[#193851] text-zinc-300 text-xs rounded-sm shadow font-vazirmatn">
        مرحله {currentIndex + 1} از {steps.length}
      </div>

      <div className="overflow-hidden bg-[#012243] rounded-md px-4 py-1 border-zinc-600 border-1 shadow-md">
        <motion.div
          className="flex gap-2"
          animate={{ x: -Math.floor(currentIndex / 2) * 100 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          {steps.map((value, index) => {
            const isActive = shouldActivate && index <= currentIndex
            const isCurrent = shouldActivate && index === currentIndex
            const isCompleted = index < currentIndex

            return (
              <div
                key={value}
                className={`relative flex gap-5 items-center justify-center px-3 pt-5 rounded-lg transition-all duration-300 scale-[0.8] ${
                  isCurrent
                    ? "text-white scale-[1] shadow-inner"
                    : isActive
                      ? "text-white scale-[1]"
                      : "text-gray-500"
                }`}
              >
                <div className="flex flex-col justify-center items-center">
                  {isCompleted && (
                    <Check
                      role="img"
                      aria-label="برد"
                      className="text-green-500 font-bold text-lg mb-1"
                    />
                  )}

                  {isCurrent &&
                    streak === 0 &&
                    lastAttemptIndex === currentIndex &&
                    phase === "showing_result" && (
                      <ImCross
                        role="img"
                        aria-label="باخت"
                        className="text-red-500 font-bold text-lg mb-1"
                      />
                    )}

                  {isCurrent && phase !== "showing_result" && (
                    <motion.div
                      initial={{ y: -8, opacity: 1 }}
                      animate={{ y: [-8, -15, -8], opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                      className="absolute top-1/2 transform -translate-y-6 text-orange-500"
                      aria-hidden="true"
                    >
                      <ArrowDown size={20} />
                    </motion.div>
                  )}
                  <span className="text-base font-vazirmatn font-bold">
                    {Number(formatPrize(value)).toLocaleString("fa-IR")}
                  </span>
                  <span className="text-base font-vazirmatn font-bold">
                    تتر
                  </span>
                </div>

                <div className="text-white text-[20px]" aria-hidden="true">
                  <IoIosArrowForward />
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default PrizeBar
