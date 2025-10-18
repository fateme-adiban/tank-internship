"use client"
import { motion } from "framer-motion"
import { Check, ArrowDown } from "lucide-react"
import { IoIosArrowForward } from "react-icons/io"
import React from "react"

interface PrizeBarProps {
  currentPrize: number
  basePrize: number
  streak: number
  maxMultiplier?: number
}

function formatPrize(value: number) {
  const prize = value.toFixed(6)
  return prize.replace(/\.?0+$/, "")
}

const PrizeBar: React.FC<PrizeBarProps> = ({
  currentPrize,
  basePrize,
  streak,
  maxMultiplier = 5,
}) => {
  const steps = Array.from({ length: maxMultiplier }, (_, i) => {
    const value = basePrize * Math.pow(2, i)
    return Number(value.toFixed(6))
  })

  const currentIndex = Math.min(streak, steps.length - 1)

  return (
    <div className="w-full flex flex-col mt-10">
      <div className="flex bg-[#012243] rounded-md px-4 py-1 border-zinc-600 border-1 shadow-md gap-2 overflow-hidden">
        {steps.map((value, index) => {
          const isActive = index <= currentIndex
          const isCurrent = index === currentIndex

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
                {isCurrent && (
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
                  >
                    <ArrowDown size={20} />
                  </motion.div>
                )}

                <span className="text-base font-vazirmatn font-bold">
                  {Number(formatPrize(value)).toLocaleString("fa-IR")}
                </span>
                <span className="text-base font-vazirmatn font-bold">تتر</span>
              </div>

              <div className="text-white text-[20px]">
                <IoIosArrowForward />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PrizeBar
