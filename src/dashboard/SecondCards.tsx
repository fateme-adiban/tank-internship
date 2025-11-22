import { Row, Col, Card, List, Avatar, Skeleton } from "antd"
import {
  StudentsWithMostAbsences,
  StudentsWithHighestAttendance,
  SessionsHeldCount,
  CanceledSessionsCount
} from "../utils/data"
import { ToPersian } from "@/utils/ToPersian"
import { blue, grey } from "@ant-design/colors"

const SecondCardsSkeleton = () => (
  <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
    {[1, 2, 3, 4].map((card) => (
      <Col key={card} xs={24} md={12} xl={6}>
        <Card
          style={{ height: 260 }}
          styles={{ body: { paddingTop: 0 } }}
          title={
            <Skeleton.Input
              active
              style={{ width: 180, height: 22, borderRadius: 6 }}
            />
          }
        >
          <div
            style={{
              direction: "rtl",
              padding: "10px 3px",
              height: 260,
              overflow: "hidden"
            }}
          >
            {[1, 2, 3, 4].map((i) => {
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.04)"
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: "50%",
                        background: "#e6f7ff",
                        position: "relative",
                        overflow: "hidden"
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: "-100%",
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                          animation: "shine 2.5s infinite",
                          animationDelay: `${i * 0.15}s`
                        }}
                      />
                    </div>

                    <Skeleton.Input
                      active
                      style={{
                        width: 50,
                        height: 18,
                        borderRadius: 6
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </Card>
      </Col>
    ))}
  </Row>
)

export const SecondCards: React.FC<{ loading?: boolean }> = ({
  loading = false
}) => {
  if (loading) {
    return <SecondCardsSkeleton />
  }

  return (
    <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
      <Col xs={24} md={12} xl={6}>
        <Card
          style={{ height: "260px" }}
          styles={{
            body: {
              paddingTop: 0
            }
          }}
          title={
            <span
              style={{
                fontSize: 15,
                fontWeight: 400,
                letterSpacing: -0.5
              }}
            >
              دانش‌آموز با بیشترین غیبت
            </span>
          }
        >
          <List
            dataSource={StudentsWithMostAbsences}
            split={false}
            style={{
              direction: "rtl",
              height: 260,
              overflowY: "auto",
              paddingInline: 3,
              paddingTop: 10
            }}
            renderItem={(student) => {
              const isTop3 = student.rank <= 3

              return (
                <List.Item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBlock: 6
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <Avatar
                      style={{
                        backgroundColor: isTop3 ? blue.primary : "transparent",
                        color: isTop3 ? "#fff" : blue.primary,

                        width: 25,
                        height: 25
                      }}
                    >
                      {ToPersian(student.rank)}
                    </Avatar>
                    <span>{student.name}</span>
                  </div>

                  <div style={{ color: grey[1] }}>
                    {ToPersian(student.class)} کلاس
                  </div>
                </List.Item>
              )
            }}
          />
        </Card>
      </Col>

      <Col xs={24} md={12} xl={6}>
        <Card
          style={{ height: "260px" }}
          styles={{
            body: {
              paddingTop: 0
            }
          }}
          title={
            <span
              style={{
                fontSize: 15,
                fontWeight: 400,
                letterSpacing: -0.5
              }}
            >
              دانش‌آموز با بیشترین حضور
            </span>
          }
        >
          <List
            dataSource={StudentsWithHighestAttendance}
            split={false}
            style={{
              direction: "rtl",
              height: 260,
              overflowY: "auto",
              paddingInline: 3,
              paddingTop: 10
            }}
            renderItem={(student) => {
              const isTop3 = student.rank <= 3

              return (
                <List.Item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBlock: 6
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <Avatar
                      style={{
                        backgroundColor: isTop3 ? blue.primary : "transparent",
                        color: isTop3 ? "#fff" : blue.primary,
                        width: 25,
                        height: 25
                      }}
                    >
                      {ToPersian(student.rank)}
                    </Avatar>
                    <span>{student.name}</span>
                  </div>

                  <div style={{ color: grey[1] }}>
                    {ToPersian(student.class)} کلاس
                  </div>
                </List.Item>
              )
            }}
          />
        </Card>
      </Col>

      <Col xs={24} md={12} xl={6}>
        <Card
          style={{ height: "260px" }}
          styles={{
            body: {
              paddingTop: 0
            }
          }}
          title={
            <span
              style={{
                fontSize: 15,
                fontWeight: 400,
                letterSpacing: -0.5
              }}
            >
              تعداد جلسات برگزار شده
            </span>
          }
        >
          <List
            dataSource={SessionsHeldCount}
            split={false}
            style={{
              direction: "rtl",
              height: 260,
              overflowY: "auto",
              paddingInline: 3,
              paddingTop: 10
            }}
            renderItem={(student) => {
              const isTop3 = student.rank <= 3

              return (
                <List.Item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBlock: 6
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <Avatar
                      style={{
                        backgroundColor: isTop3 ? blue.primary : "transparent",
                        color: isTop3 ? "#fff" : blue.primary,
                        width: 25,
                        height: 25
                      }}
                    >
                      {ToPersian(student.rank)}
                    </Avatar>
                    <span>{student.name}</span>
                  </div>

                  <div style={{ color: grey[1] }}>
                    {ToPersian(student.class)} کلاس
                  </div>
                </List.Item>
              )
            }}
          />
        </Card>
      </Col>

      <Col xs={24} md={12} xl={6}>
        <Card
          style={{ height: "260px" }}
          styles={{
            body: {
              paddingTop: 0
            }
          }}
          title={
            <span
              style={{
                fontSize: 15,
                fontWeight: 400,
                letterSpacing: -0.5
              }}
            >
              تعداد جلسات لغو شده
            </span>
          }
        >
          <List
            dataSource={CanceledSessionsCount}
            split={false}
            style={{
              direction: "rtl",
              height: 260,
              overflowY: "auto",
              paddingInline: 3,
              paddingTop: 10
            }}
            renderItem={(student) => {
              const isTop3 = student.rank <= 3

              return (
                <List.Item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBlock: 6
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <Avatar
                      style={{
                        backgroundColor: isTop3 ? blue.primary : "transparent",
                        color: isTop3 ? "#fff" : blue.primary,
                        width: 25,
                        height: 25
                      }}
                    >
                      {ToPersian(student.rank)}
                    </Avatar>
                    <span>{student.name}</span>
                  </div>

                  <div style={{ color: grey[1] }}>
                    {ToPersian(student.class)} کلاس
                  </div>
                </List.Item>
              )
            }}
          />
        </Card>
      </Col>
    </Row>
  )
}
