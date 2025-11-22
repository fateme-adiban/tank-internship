"use client"
import { DataBarChart } from "../utils/data"
import { ToPersian } from "@/utils/ToPersian"
import { CustomTooltip } from "@/components/CustomTooltip"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import { blue } from "@ant-design/colors"
import { Skeleton } from "antd"
import { AttendanceItem } from "../hooks/useChartData"

export const AttendanceChartSkeleton = () => (
  <div
    style={{
      width: "100%",
      height: 280,
      direction: "rtl",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#fafafa",
      borderRadius: 12,
      position: "relative",
      overflow: "hidden"
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-around",
        height: "80%",
        width: "90%",
        gap: 8
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Skeleton
          key={i}
          active
          title={false}
          paragraph={{ rows: 1, width: 20 }}
          style={{
            margin: 0,
            width: 20,
            height: "100%",
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "flex-start",
            flex: 1
          }}
        />
      ))}
    </div>
  </div>
)

export const AttendanceChart = ({ data }: { data: AttendanceItem[] }) => {
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
          data={DataBarChart}
          margin={{ top: 20, right: 0, left: 0, bottom: 30 }}
        >
          <CartesianGrid vertical={false} strokeOpacity={0.4} />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12 }}
            interval={0}
            angle={-90}
            dx={-5}
            textAnchor="start"
            dy={5}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            orientation="right"
            tick={{ fontSize: 14 }}
            dy={-3}
            dx={25}
            ticks={[0, 0.25, 0.5, 0.75, 1]}
            tickFormatter={(value) => ToPersian(value)}
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
