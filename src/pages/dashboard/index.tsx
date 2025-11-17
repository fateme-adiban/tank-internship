"use client"
import { useState } from "react"
import { Row, Col, Card, ConfigProvider, Select } from "antd"
import { gray } from "@ant-design/colors"
import { useMediaQuery } from "react-responsive"
import { sectionOptions } from "../../utils/data"
import { Tabs } from "./Tabs"
import { TopTeachers } from "./TopTeachers"
import { AttendanceChart } from "./AttendanceChart"
import { FirstCards } from "./FirstCards"
import { TeacherAttendanceChart } from "./TeacherAttendanceChart"
import { SecondCards } from "./SecondCards"
import { StudentAttendanceChart } from "./StudentAttendanceChart"
import { StudentAttendanceByGroupChart } from "./StudentAttendanceByGroupChart"

export const Dashboard = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 })

  const [selected, setSelected] = useState("main")

  return (
    <div>
      <Tabs />

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} md={12}>
          <Card title="تعداد حضور و غیاب انجام‌شده در ۷ روز گذشته">
            <AttendanceChart />
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="برترین اساتید در حضور و غیاب ماه جاری">
            <TopTeachers />
          </Card>
        </Col>
      </Row>

      <FirstCards />

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24}>
          <Card
            title={
              <div className="flex justify-between items-center">
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    color: gray[5],
                    fontSize: 15
                  }}
                >
                  میزان حضور غیاب معلم به تفکیک شعبه در ماه جاری
                </span>
                <ConfigProvider direction="rtl">
                  <Select
                    value={selected}
                    onChange={setSelected}
                    showSearch
                    placeholder={
                      <span style={{ color: "black", fontWeight: 700 }}>
                        دانشکده اصلی
                      </span>
                    }
                    style={{ width: isMobile ? "50%" : "30%" }}
                    options={sectionOptions}
                    defaultValue="main"
                    classNames={{
                      popup: { root: "my-select-dropdown" }
                    }}
                  />
                </ConfigProvider>
              </div>
            }
          >
            <TeacherAttendanceChart />
          </Card>
        </Col>
      </Row>

      <SecondCards />

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={12}>
          <Card
            title={
              <div className="flex justify-between items-center">
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize: 14
                  }}
                >
                  درصد حضور و غیاب دانش‌آموز در کلاسهای صبح و بعدازظهر
                </span>
              </div>
            }
          >
            <StudentAttendanceChart />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card
            title={
              <div className="flex justify-between items-center">
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize: 14
                  }}
                >
                  درصد حضور و غیاب دانش‌آموز به تفکیک گروه آموزشی
                </span>
              </div>
            }
          >
            <StudentAttendanceByGroupChart />
          </Card>
        </Col>
      </Row>
    </div>
  )
}
