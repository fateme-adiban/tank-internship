"use client"
import { StudentAttendanceByGroupChartData } from "../../utils/data"
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

export const StudentAttendanceByGroupChart = () => (
  <div
    style={{
      width: "100%",
      height: 280,
      direction: "rtl",
      textAlign: "center"
    }}
  >
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={StudentAttendanceByGroupChartData}
        margin={{ top: 20, right: 0, left: 40, bottom: 50 }}
      >
        <CartesianGrid vertical={false} strokeOpacity={0.4} />

        <XAxis
          dataKey="name"
          tick={{ fontSize: 12, fontWeight: 500 }}
          interval={0}
          angle={-270}
          dx={-5}
          dy={35}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          orientation="right"
          tick={{ fontSize: 14, fontWeight: 600 }}
          dx={30}
          ticks={[0, 25, 50, 75, 100]}
          tickFormatter={(value) => `${ToPersian(value)}٪`}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />

        <Bar dataKey="value" fill={blue.primary} barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  </div>
)
