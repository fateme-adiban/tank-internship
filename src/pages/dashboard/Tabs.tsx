import { Row, Col, Button } from "antd"
import { blue } from "@ant-design/colors"
import {
  CalendarOutlined,
  UserOutlined,
  PieChartOutlined,
  BookOutlined
} from "@ant-design/icons"

export const Tabs = () => {
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
          style={{ padding: "25px 0px" }}
          className="no-hover-btn"
        >
          <span className="font-semibold text-[15px]"> مدیریت نوبت‌ها</span>
        </Button>
      </Col>

      <Col xs={24} sm={12} md={6}>
        <Button
          type="default"
          icon={<UserOutlined style={{ color: blue.primary, fontSize: 15 }} />}
          block
          size="large"
          style={{ padding: "25px 0px" }}
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
          style={{ padding: "25px 0px" }}
          className="no-hover-btn"
        >
          <span className="font-semibold text-[15px]">
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
          style={{ padding: "25px 0px" }}
          className="no-hover-btn"
        >
          <span className="font-semibold text-[15px]">لیست گزارش‌ها</span>
        </Button>
      </Col>
    </Row>
  )
}
