"use client"
import { StudentAttendanceChartData } from "../utils/data"
import { ToPersian } from "@/utils/ToPersian"
import { ToPersianDate } from "@/utils/ToPersianDate"
import { blue, orange } from "@ant-design/colors"
import { useMediaQuery } from "react-responsive"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts"
import { Skeleton } from "antd"

interface ChartDataPoint {
  date: string
  day: string
  before_12: number
  after_12: number
}

interface CustomLegendPayload {
  value: string
  color: string
}

const CustomLegend = ({ payload }: { payload?: CustomLegendPayload[] }) => {
  if (!payload) return null

  return (
    <div
      style={{
        direction: "rtl",
        textAlign: "center",
        marginBottom: -40,
        fontSize: 15,
        display: "flex",
        justifyContent: "center",
        gap: 20
      }}
    >
      {payload
        .slice()
        .reverse()
        .map((entry) => (
          <div
            key={`${entry.value}-${entry.color}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 12,
                height: 12,
                backgroundColor: entry.color
              }}
            />
            <span style={{ color: entry.color }}>{entry.value}</span>
          </div>
        ))}
    </div>
  )
}

interface CustomTooltipPayload {
  value: number
  dataKey: string
  payload: ChartDataPoint
}

const CustomTooltip = ({
  active,
  payload
}: {
  active?: boolean
  payload?: CustomTooltipPayload[]
}) => {
  if (!active || !payload || payload.length === 0) return null

  const point = payload[0].payload
  const before_12 = payload.find((p) => p.dataKey === "before_12")?.value || 0
  const after_12 = payload.find((p) => p.dataKey === "after_12")?.value || 0

  return (
    <div
      dir="rtl"
      style={{
        background: "#fff",
        border: "1px solid #f5f5f5",
        borderRadius: 4,
        padding: "8px 18px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        lineHeight: 1.5,
        fontSize: 14,
        position: "relative",
        textAlign: "right"
      }}
    >
      <div
        style={{
          fontSize: 15,
          marginBottom: 4,
          fontWeight: 400
        }}
      >
        {point.day} {ToPersianDate(point.date)}
      </div>
      <div
        style={{
          marginBottom: 4,
          display: "flex",
          alignItems: "center",
          gap: 6
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 10,
            height: 10,
            backgroundColor: orange.primary
          }}
        />
        ٪{ToPersian(before_12)} از کلاس
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span
          style={{
            display: "inline-block",
            width: 10,
            height: 10,
            backgroundColor: blue.primary
          }}
        />
        ٪{ToPersian(after_12)} از کلاس
      </div>
    </div>
  )
}

export const StudentAttendanceChartSkeleton = () => (
  <div
    style={{
      width: "100%",
      height: 280,
      direction: "rtl",
      background: "#fafafa",
      borderRadius: 12,
      padding: "16px",
      position: "relative",
      overflow: "hidden"
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 20px",
        marginTop: 230
      }}
    >
      {[0, 1, 2].map((day) => (
        <Skeleton.Input key={day} active style={{ width: 24, height: 16 }} />
      ))}
    </div>
  </div>
)

export const StudentAttendanceChart = ({}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <div
      style={{
        width: "100%",
        height: 280,
        direction: "rtl",
        textAlign: "center"
      }}
    >
      <div
        style={{ height: 250, margin: "10px 0", transition: "all 0.2s ease" }}
      >
        <ResponsiveContainer width="100%" height="100%" minHeight={280}>
          <AreaChart
            data={StudentAttendanceChartData as ChartDataPoint[]}
            margin={{ top: 0, right: 0, left: 20, bottom: 30 }}
          >
            <CartesianGrid vertical={false} strokeOpacity={0.4} />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 13 }}
              interval={isMobile ? 1 : 0}
              dy={10}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              orientation="right"
              tick={{ fontSize: 14 }}
              dx={20}
              tickFormatter={(value: number) => ToPersian(value)}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              name="کلاس‌های قبل ۱۲"
              type="linear"
              dataKey="before_12"
              stroke={orange.primary}
              strokeWidth={1}
              fill="none"
              dot={{
                fill: orange.primary,
                r: 2
              }}
              isAnimationActive={false}
            />
            <Area
              name="کلاس‌های بعد ۱۲"
              type="linear"
              dataKey="after_12"
              stroke={blue.primary}
              strokeWidth={1}
              fill="none"
              dot={{
                fill: blue.primary,
                r: 2
              }}
              isAnimationActive={false}
            />
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="square"
              wrapperStyle={{
                direction: "rtl",
                fontSize: 13,
                marginBottom: -20
              }}
              content={<CustomLegend />}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
