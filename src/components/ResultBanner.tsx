import { Dispatch } from "react"
import { GameAction } from "../../lib/gameReducer"

export default function ResultBanner({
  result,
  dispatch,
}: {
  result: "win" | "lose"
  dispatch: Dispatch<GameAction>
}) {
  return (
    <>
      {result === "win" && (
        <div
          className="absolute left-3 right-3 bottom-0 h-1/5 flex items-center justify-center text-center py-2 px-4 rounded-[3px] bg-[#606d80] shadow-2xl"
          style={{
            boxShadow: `
              inset 0 4px 10px rgba(0,0,0,0.4),   
              0 8px 12px rgba(0,0,0,0.5)        
            `,
          }}
        >
          <div className="flex flex-col items-center justify-between gap-5 w-full">
            <h2 className="font-bold text-white text-xl">
              !پیش‌بینی شما درست بود
            </h2>

            <p className="text-green-400 font-extrabold text-lg">
              به بازی بازمی‌گردید
            </p>
          </div>
        </div>
      )}
      {result !== "win" && (
        <div
          className="absolute left-4 right-4 bottom-5 h-1/2 flex items-center justify-center text-center py-2 px-4 rounded-md bg-[#606d80] shadow-2xl"
          style={{
            boxShadow: `
              inset 0 4px 20px rgba(0,0,0,0.4),   
              0 8px 12px rgba(0,0,0,0.5)        
            `,
          }}
        >
          <div className="flex flex-col items-center justify-between gap-30 w-full">
            <h2 className="font-bold text-white text-xl">
              پیش‌بینی شما اشتباه بود
            </h2>

            <div className="flex flex-col items-center justify-end gap-5 w-full font-bold text-[17px]">
              <button
                onClick={() => dispatch({ type: "RESET_ROUND" })}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded border-black border-1 cursor-pointer shadow-md transition-all duration-300 hover:from-blue-600"
              >
                تلاش مجدد
              </button>
              <button
                onClick={() => dispatch({ type: "RESET_ROUND" })}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded border-black border-1 cursor-pointer shadow-md transition-all duration-300 hover:from-red-600"
              >
                بازگشت
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
