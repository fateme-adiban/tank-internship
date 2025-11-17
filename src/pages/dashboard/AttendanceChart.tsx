"use client"
import { DataBarChart } from "../../utils/data"
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

export const AttendanceChart = () => (
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
        data={DataBarChart}
        margin={{ top: 20, right: 0, left: 0, bottom: 30 }}
      >
        <CartesianGrid vertical={false} strokeOpacity={0.4} />

        <XAxis
          dataKey="day"
          tick={{ fontSize: 12, fontWeight: 500 }}
          interval={0}
          angle={-90}
          dx={-5}
          dy={20}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          orientation="right"
          tick={{ fontSize: 14, fontWeight: 600 }}
          dx={20}
          ticks={[0, 0.25, 0.5, 0.75, 1]}
          tickFormatter={(value) => ToPersian(value)}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
        <Bar dataKey="value" fill={blue.primary} barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  </div>
)
