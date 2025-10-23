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
          role="status"
          aria-live="assertive"
          className="absolute left-3 right-3 bottom-0 h-1/5 flex items-center justify-center text-center py-2 px-4 rounded-md bg-[#6b798f] shadow-2xl border-black border-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <div className="flex flex-col items-center justify-between gap-5 w-full">
            <h2 className="font-bold text-white text-2xl">
              !پیش‌بینی شما درست بود
            </h2>

            <p className="text-black font-vazirmatn font-extrabold text-lg">
              به بازی بازمی‌گردید
            </p>
          </div>
        </div>
      )}

      {result !== "win" && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            aria-hidden="true"
          ></div>

          <div
            role="alert"
            aria-live="assertive"
            className="z-50 absolute left-4 right-4 bottom-5 h-1/2 flex items-center justify-center text-center py-2 px-4 rounded-md bg-[#6b798f] shadow-2xl border-black border-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <div className="flex flex-col items-center justify-between gap-20 w-full">
              <h2 className="font-bold font-vazirmatn text-white text-xl sm:text-2xl">
                پیش‌بینی شما اشتباه بود
              </h2>

              <div className="flex flex-col items-center justify-end gap-5 w-full font-bold font-vazirmatn text-lg">
                <button
                  onClick={() => dispatch({ type: "RESET_ROUND" })}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl border-black border-2 cursor-pointer shadow-md transition-all duration-300 hover:from-blue-600"
                >
                  تلاش مجدد
                </button>

                <button
                  onClick={() => dispatch({ type: "RESET_ROUND" })}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-xl border-black border-2 cursor-pointer shadow-md transition-all duration-300 hover:from-red-600"
                >
                  بازگشت
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
