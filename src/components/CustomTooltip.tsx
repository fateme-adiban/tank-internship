import { ToPersian } from "@/utils/ToPersian"
interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}

export const CustomTooltip = ({
  active,
  payload,
  label
}: CustomTooltipProps) => {
  if (!active || !payload?.length) return null
  const value = payload[0].value as number
  return (
    <div
      dir="rtl"
      style={{
        background: "#fff",
        border: "1px solid #f5f5f5",
        borderRadius: "4px",
        padding: "8px 15px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        fontSize: 13,
        lineHeight: 1.5,
        position: "relative",
        textAlign: "right"
      }}
    >
      <div style={{ color: "#8c8c8c" }}>{label}</div>
      <div>تعداد جلسات حضور غیاب شده : ۰</div>
      <div>کل درس‌ها : {ToPersian(value)}</div>
    </div>
  )
}
