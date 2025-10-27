import {
  AreaChart,
  Area,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"

const PriceChart: React.FC<{
  prices: number[]
  priceAtGuess?: number
  "data-testid"?: string
}> = ({ prices, priceAtGuess, "data-testid": testId }) => {
  const data = prices.map((p, i) => ({
    time: i,
    price: p,
  }))

  const placeholderData = Array.from({ length: 10 }, (_, i) => ({
    time: i,
    price: 1800,
  }))

  const chartData = data.length ? data : placeholderData

  const latestPrice = prices[prices.length - 1]
  const guessPrice = priceAtGuess?.toFixed(2)

  return (
    <div
      role="img"
      aria-label="نمودار زنده قیمت اتریوم"
      data-testid={testId}
      className="w-full h-48 bg-transparent"
    >
      <figcaption className="sr-only">
        این نمودار تغییرات قیمت اتریوم را در هر ثانیه نشان می‌دهد. خط آبی قیمت
        فعلی و خط زرد قیمت حدس‌زده‌شده را نمایش می‌دهد
      </figcaption>

      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {`نمودار زنده قیمت اتریوم. ${
          latestPrice
            ? `آخرین قیمت ${latestPrice.toFixed(2)} دلار است.`
            : "در حال بارگذاری..."
        } ${guessPrice ? `قیمت حدس‌زده‌شده ${guessPrice} دلار است.` : ""}`}
      </div>

      <ResponsiveContainer aria-hidden="true" width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
        >
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <YAxis
            orientation="right"
            domain={["auto", "auto"]}
            tick={{ fill: "#fff", fontSize: 10 }}
            width={40}
            axisLine={{ stroke: "transparent" }}
            tickLine={{ stroke: "transparent" }}
            tickFormatter={(value: number) => value.toFixed(2)}
          />

          <Area
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="url(#colorPrice)"
            dot={false}
            activeDot={false}
            isAnimationActive={false}
          />

          <ReferenceLine
            y={latestPrice}
            stroke="#3b82f6"
            strokeDasharray="4 4"
            strokeWidth={1}
            label={({ viewBox }) => {
              const fontSize = 12
              const paddingX = 4
              const paddingY = 2
              const text = latestPrice.toFixed(2)

              const textWidth = text.length * (fontSize * 0.6)
              const x = viewBox.width + 10
              const y = viewBox.y - 3

              return (
                <g>
                  <rect
                    x={x - paddingX}
                    y={y - paddingY * 3}
                    width={textWidth + paddingX * 2}
                    height={fontSize + paddingY * 2}
                    fill="#2563eb"
                  />

                  <text
                    x={x}
                    y={y + fontSize / 2}
                    fill="#fff"
                    fontSize={fontSize}
                  >
                    {text}
                  </text>
                </g>
              )
            }}
          />

          {guessPrice !== undefined && (
            <ReferenceLine
              y={guessPrice}
              stroke="#facc15"
              strokeWidth={1}
              label={({ viewBox }) => {
                const fontSize = 12
                const paddingX = 4
                const paddingY = 2
                const textWidth = guessPrice.length * (fontSize * 0.6)
                const x = viewBox.width + 10
                const y = viewBox.y - 3

                return (
                  <g>
                    <rect
                      x={x - paddingX}
                      y={y - paddingY * 3}
                      width={textWidth + paddingX * 2}
                      height={fontSize + paddingY * 2}
                      fill="#facc15"
                    />
                    <text
                      x={x}
                      y={y + fontSize / 2}
                      fill="#000"
                      fontSize={fontSize}
                    >
                      {guessPrice}
                    </text>
                  </g>
                )
              }}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PriceChart
