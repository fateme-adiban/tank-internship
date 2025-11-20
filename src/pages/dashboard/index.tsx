"use client"
import { useState, useEffect, Suspense } from "react"
import dynamic from "next/dynamic"
import { Row, Col, Card, ConfigProvider, Select } from "antd"
import { gray } from "@ant-design/colors"
import { sectionOptions } from "../../utils/data"

import { Tabs } from "./Tabs"
import { TopTeachers } from "./TopTeachers"
import { FirstCards } from "./FirstCards"
import { SecondCards } from "./SecondCards"

import { AttendanceChartSkeleton } from "./AttendanceChart"
import { TeacherAttendanceChartSkeleton } from "./TeacherAttendanceChart"
import { StudentAttendanceChartSkeleton } from "./StudentAttendanceChart"
import { StudentAttendanceByGroupChartSkeleton } from "./StudentAttendanceByGroupChart"

const AttendanceChart = dynamic(
  () =>
    import("./AttendanceChart").then((module) => ({
      default: module.AttendanceChart
    })),
  {
    ssr: false,
    loading: () => <AttendanceChartSkeleton />
  }
)

const TeacherAttendanceChart = dynamic(
  () =>
    import("./TeacherAttendanceChart").then((module) => ({
      default: module.TeacherAttendanceChart
    })),
  {
    ssr: false,
    loading: () => <TeacherAttendanceChartSkeleton />
  }
)

const StudentAttendanceChart = dynamic(
  () =>
    import("./StudentAttendanceChart").then((module) => ({
      default: module.StudentAttendanceChart
    })),
  {
    ssr: false,
    loading: () => <StudentAttendanceChartSkeleton />
  }
)

const StudentAttendanceByGroupChart = dynamic(
  () =>
    import("./StudentAttendanceByGroupChart").then((module) => ({
      default: module.StudentAttendanceByGroupChart
    })),
  {
    ssr: false,
    loading: () => <StudentAttendanceByGroupChartSkeleton />
  }
)

export const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [selected, setSelected] = useState("main")
  const [isLoadingData, setIsLoadingData] = useState(true)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoadingData(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <Tabs loading={isLoadingData} />

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} md={12}>
          <Card title="تعداد حضور و غیاب انجام‌شده در ۷ روز گذشته">
            <div style={{ minHeight: 280, width: "100%" }}>
              {isLoadingData ? (
                <AttendanceChartSkeleton />
              ) : (
                <Suspense fallback={<AttendanceChartSkeleton />}>
                  <AttendanceChart />
                </Suspense>
              )}
            </div>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="برترین اساتید در حضور و غیاب ماه جاری">
            <TopTeachers loading={isLoadingData} />
          </Card>
        </Col>
      </Row>

      <FirstCards loading={isLoadingData} />

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
                  />
                </ConfigProvider>
              </div>
            }
          >
            <div style={{ minHeight: 400, width: "100%" }}>
              {isLoadingData ? (
                <TeacherAttendanceChartSkeleton />
              ) : (
                <Suspense fallback={<TeacherAttendanceChartSkeleton />}>
                  <TeacherAttendanceChart />
                </Suspense>
              )}
            </div>
          </Card>
        </Col>
      </Row>

      <SecondCards loading={isLoadingData} />

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={12}>
          <Card title="درصد حضور و غیاب دانش‌آموز در کلاسهای صبح و بعدازظهر">
            <div style={{ minHeight: 280, width: "100%" }}>
              {isLoadingData ? (
                <StudentAttendanceChartSkeleton />
              ) : (
                <Suspense fallback={<StudentAttendanceChartSkeleton />}>
                  <StudentAttendanceChart />
                </Suspense>
              )}
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="درصد حضور و غیاب دانش‌آموز به تفکیک گروه آموزشی">
            <div style={{ minHeight: 280, width: "100%" }}>
              {isLoadingData ? (
                <StudentAttendanceByGroupChartSkeleton />
              ) : (
                <Suspense fallback={<StudentAttendanceByGroupChartSkeleton />}>
                  <StudentAttendanceByGroupChart />
                </Suspense>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
