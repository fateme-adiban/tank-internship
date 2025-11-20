import { Row, Col, Card, Progress, Divider, Skeleton } from "antd"
import { DataCardChart } from "../../utils/data"
import { ToPersianDate } from "@/utils/ToPersianDate"
import { ToPersian } from "@/utils/ToPersian"
import { blue, gray, green } from "@ant-design/colors"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts"

const CustomTooltip = ({
  active,
  payload
}: {
  active?: boolean
  payload?: Array<{
    value: number
    dataKey: string
    payload: { date: string; main: number; base: number }
  }>
}) => {
  if (active && payload && payload.length) {
    const main = payload.find((p) => p.dataKey === "main")?.value || 0
    const base = payload.find((p) => p.dataKey === "base")?.value || 0

    const point = payload[0].payload

    return (
      <div
        dir="rtl"
        style={{
          background: "#fff",
          border: "1px solid #f5f5f5",
          borderRadius: 4,
          padding: "8px 15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          fontSize: 13,
          lineHeight: 1.5,
          position: "relative",
          textAlign: "right"
        }}
      >
        <div
          style={{
            fontSize: 15,
            marginBottom: 4
          }}
        >
          {ToPersianDate(point.date)}
        </div>

        <div
          style={{
            color: blue.primary,
            marginBottom: 4
          }}
        >
          جلسات کامل شده: {ToPersian(main / 100)}
        </div>
        <div style={{ color: green.primary }}>
          جلسات حضور غیاب شده: {ToPersian(base)}
        </div>
      </div>
    )
  }
  return null
}

export const FirstCardsSkeleton = () => (
  <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
    {[1, 2, 3, 4].map((i) => (
      <Col key={i} xs={24} md={12} xl={6}>
        <Card
          style={{ height: 200 }}
          styles={{
            header: { borderBottom: "none" },
            body: { paddingTop: 0 }
          }}
          title={<Skeleton.Input active style={{ width: 100, height: 16 }} />}
        >
          <div style={{ padding: "16px 0px" }}>
            <div className="flex flex-col items-center gap-3">
              <Skeleton.Input active style={{ width: 80, height: 16 }} />
              <Skeleton.Input active style={{ width: 140, height: 16 }} />
            </div>
          </div>
        </Card>
      </Col>
    ))}
  </Row>
)

export const FirstCards: React.FC<{ loading?: boolean }> = ({
  loading = false
}) => {
  if (loading) {
    return <FirstCardsSkeleton />
  }

  return (
    <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
      <Col xs={24} md={12} xl={6}>
        <Card
          style={{ height: "200px" }}
          styles={{
            header: {
              borderBottom: "none"
            },
            body: {
              paddingTop: 0
            }
          }}
          title={
            <span
              style={{
                color: gray[0],
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: -0.5
              }}
            >
              آمار حضور و غیاب امروز
            </span>
          }
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-[25px]">٪۰.۰</span>
            <span style={{ color: gray[4], fontSize: 16 }}>
              از ۳۵ کلاس برگزار می‌شود
            </span>
          </div>

          <Progress
            style={{ paddingTop: 20 }}
            percent={0}
            size="small"
            showInfo={false}
          />
          <Divider style={{ marginBottom: 8 }} />
          <div className="flex justify-between text-[14px]">
            <span>از دیروز ٪۰.۰</span>
            <span>از هفته پیش ٪۰.۰</span>
          </div>
        </Card>
      </Col>

      <Col xs={24} md={12} xl={6}>
        <Card
          style={{ height: "200px" }}
          styles={{
            header: {
              borderBottom: "none"
            },
            body: {
              paddingTop: 0
            }
          }}
          title={
            <span
              style={{
                color: gray[0],
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: -0.5
              }}
            >
              آمار حضور و غیاب ماه جاری
            </span>
          }
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-[25px]"> ۱۷۲ </span>
            <span style={{ color: gray[4], fontSize: 16 }}>کل درس‌ها </span>
          </div>

          <div style={{ height: 50, margin: "13px 0" }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={DataCardChart}
                margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor={blue.primary}
                      stopOpacity={0.5}
                    />
                    <stop
                      offset="100%"
                      stopColor={blue.primary}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <XAxis hide />
                <YAxis hide />

                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ stroke: "transparent" }}
                />

                <Area
                  type="linear"
                  dataKey="base"
                  stroke={green.primary}
                  strokeWidth={1}
                  fill="none"
                  dot={false}
                  isAnimationActive={false}
                />

                <Area
                  type="linear"
                  dataKey="main"
                  stroke={blue.primary}
                  strokeWidth={1}
                  fill="url(#grad)"
                  dot={false}
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <span className="text-[14px]">درصد حضور و غیاب انجام‌شده ٪۰</span>
        </Card>
      </Col>

      <Col xs={24} md={12} xl={6}>
        <Card
          style={{ height: "200px" }}
          styles={{
            header: {
              borderBottom: "none"
            },
            body: {
              paddingTop: 0
            }
          }}
          title={
            <span
              style={{
                color: gray[0],
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: -0.5
              }}
            >
              آمار غیبت کل مرکز آموزشی ماه جاری
            </span>
          }
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-[25px]">۰</span>
            <span style={{ color: gray[4], fontSize: 15 }}>دانش‌آموز غایب</span>
          </div>

          <Divider style={{ marginBottom: 8, marginTop: 60 }} />

          <span className="text-[14px]">درصد غایبین در همه کلاس‌ها ٪۰.۰</span>
        </Card>
      </Col>

      <Col xs={24} md={12} xl={6}>
        <Card
          className="relative"
          style={{ height: "200px" }}
          styles={{
            header: {
              borderBottom: "none"
            },
            body: {
              paddingTop: 0
            }
          }}
          title={
            <span
              style={{
                color: gray[0],
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: -0.5
              }}
            >
              برترین شعبه
            </span>
          }
        >
          <div className="flex flex-col gap-2 ">
            <span className="text-[17px]">شعبه فنی مهندسی</span>
            <span style={{ color: gray[2], fontSize: 13, fontWeight: 500 }}>
              با بیشترین کلاس حضور غیاب شده
            </span>
            <img
              src="/images/cuate.png"
              className="w-35 md:w-30 2xl:w-35 absolute bottom-0 -left-1"
            />
          </div>
        </Card>
      </Col>
    </Row>
  )
}
