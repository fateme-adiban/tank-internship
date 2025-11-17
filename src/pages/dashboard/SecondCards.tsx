import { Row, Col, Card, List, Avatar } from "antd"
import {
  StudentsWithMostAbsences,
  StudentsWithHighestAttendance,
  SessionsHeldCount,
  CanceledSessionsCount
} from "../../utils/data"
import { ToPersian } from "@/utils/ToPersian"
import { blue, grey } from "@ant-design/colors"

export const SecondCards = () => {
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
                fontWeight: 600,
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
                        fontWeight: "bold",
                        width: 25,
                        height: 25
                      }}
                    >
                      {ToPersian(student.rank)}
                    </Avatar>
                    <span style={{ fontWeight: 600 }}>{student.name}</span>
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
                fontWeight: 600,
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
                        fontWeight: "bold",
                        width: 25,
                        height: 25
                      }}
                    >
                      {ToPersian(student.rank)}
                    </Avatar>
                    <span style={{ fontWeight: 600 }}>{student.name}</span>
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
                fontWeight: 600,
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
                        fontWeight: "bold",
                        width: 25,
                        height: 25
                      }}
                    >
                      {ToPersian(student.rank)}
                    </Avatar>
                    <span style={{ fontWeight: 600 }}>{student.name}</span>
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
                fontWeight: 600,
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
                        fontWeight: "bold",
                        width: 25,
                        height: 25
                      }}
                    >
                      {ToPersian(student.rank)}
                    </Avatar>
                    <span style={{ fontWeight: 600 }}>{student.name}</span>
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
