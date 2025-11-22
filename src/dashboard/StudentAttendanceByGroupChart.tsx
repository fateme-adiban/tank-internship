"use client"
import { StudentAttendanceByGroupChartData } from "../utils/data"
import { ToPersian } from "@/utils/ToPersian"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import { blue, gray } from "@ant-design/colors"
import { StudentByGroupItem } from "../hooks/useChartData"

const CustomTooltip = ({
  active,
  payload
}: {
  active?: boolean
  payload?: Array<{
    value: number
    dataKey: string
    payload: { name: string; value: number }
  }>
}) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload

    return (
      <div
        dir="rtl"
        style={{
          background: "#fff",
          border: "1px solid #f5f5f5",
          borderRadius: 4,
          padding: "8px 18px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          fontSize: 13,
          lineHeight: 1.5,
          position: "relative",
          textAlign: "right"
        }}
      >
        <div
          style={{
            color: gray.primary,
            marginBottom: 4
          }}
        >
          {data.name}
        </div>
        <div>مقدار: {`${ToPersian(data.value)}٪`}</div>
      </div>
    )
  }
  return null
}

export const StudentAttendanceByGroupChartSkeleton = () => (
  <div
    style={{
      width: "100%",
      height: 280,
      direction: "rtl",
      background: "#fafafa",
      borderRadius: 12,
      padding: "20px 16px",
      position: "relative",
      overflow: "hidden"
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 40,
        left: 60,
        right: 60,
        bottom: 80
      }}
    >
      {[0, 25, 50, 75, 100].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: `${i * 25}%`,
            height: 1,
            background: "rgba(0,0,0,0.05)"
          }}
        />
      ))}
    </div>
  </div>
)

export const StudentAttendanceByGroupChart = ({
  data
}: {
  data: StudentByGroupItem[]
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: 280,
        direction: "rtl",
        textAlign: "center"
      }}
    >
      <ResponsiveContainer width="100%" height="100%" minHeight={280}>
        <BarChart
          data={StudentAttendanceByGroupChartData}
          margin={{ top: 20, right: 0, left: 40, bottom: 50 }}
        >
          <CartesianGrid vertical={false} strokeOpacity={0.4} />

          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            angle={-90}
            textAnchor="start"
            interval={0}
            dx={-8}
            dy={5}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            orientation="right"
            tick={{ fontSize: 14 }}
            dx={30}
            ticks={[0, 25, 50, 75, 100]}
            tickFormatter={(value) => `${ToPersian(value)}٪`}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />

          <Bar dataKey="value" fill={blue.primary} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
