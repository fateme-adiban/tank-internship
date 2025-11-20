"use client"
import { Row, Col, Button, Skeleton } from "antd"
import { blue } from "@ant-design/colors"
import {
  CalendarOutlined,
  UserOutlined,
  PieChartOutlined,
  BookOutlined
} from "@ant-design/icons"

const TabsSkeleton = () => (
  <Row gutter={[16, 16]} justify="space-between">
    {[1, 2, 3, 4].map((i) => (
      <Col key={i} xs={24} sm={12} md={6}>
        <div
          style={{
            padding: "15px 10px",
            background: "#fff",
            border: "1px solid #f0f0f0",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#e6f7ff",
              borderRadius: 10,
              flexShrink: 0
            }}
          />

          <div
            style={{
              height: 20,
              width: 110,
              background: "#f0f0f0",
              borderRadius: 6
            }}
          />
        </div>
      </Col>
    ))}
  </Row>
)

export const Tabs: React.FC<{ loading?: boolean }> = ({ loading = false }) => {
  if (loading) {
    return <TabsSkeleton />
  }

  return (
    <Row gutter={[16, 16]} justify="space-between">
      <Col xs={24} sm={12} md={6}>
        <Button
          type="default"
          icon={
            <CalendarOutlined style={{ color: blue.primary, fontSize: 15 }} />
          }
          block
          size="large"
          style={{ padding: "25px 0px", lineHeight: "1.7" }}
          className="no-hover-btn"
        >
          <span
            className="font-semibold text-[15px]"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }}
          >
            مدیریت نوبت‌ها
          </span>
        </Button>
      </Col>

      <Col xs={24} sm={12} md={6}>
        <Button
          type="default"
          icon={<UserOutlined style={{ color: blue.primary, fontSize: 15 }} />}
          block
          size="large"
          style={{ padding: "25px 0px", lineHeight: "1.7" }}
          className="no-hover-btn"
        >
          <span className="font-semibold text-[15px]">لیست دانش‌آموزها</span>
        </Button>
      </Col>

      <Col xs={24} sm={12} md={6}>
        <Button
          type="default"
          icon={<BookOutlined style={{ color: blue.primary, fontSize: 15 }} />}
          block
          size="large"
          style={{ padding: "25px 5px", lineHeight: "1.7" }}
          className="no-hover-btn"
        >
          <span
            className="font-semibold text-[15px]"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }}
          >
            تعریف درس‌ها و واحدها
          </span>
        </Button>
      </Col>

      <Col xs={24} sm={12} md={6}>
        <Button
          type="default"
          icon={
            <PieChartOutlined style={{ color: blue.primary, fontSize: 15 }} />
          }
          block
          size="large"
          style={{ padding: "25px 0px", lineHeight: "1.7" }}
          className="no-hover-btn"
        >
          <span
            className="font-semibold text-[15px]"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }}
          >
            لیست گزارش‌ها
          </span>
        </Button>
      </Col>
    </Row>
  )
}
