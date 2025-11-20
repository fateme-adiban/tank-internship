"use client"
import { Layout, Avatar, Button, Divider, Skeleton } from "antd"
import { ReactNode } from "react"
import { gray, blue } from "@ant-design/colors"
import { SettingOutlined } from "@ant-design/icons"

const { Header } = Layout

const HeaderSectionSkeleton = () => (
  <Header
    style={{
      position: "sticky",
      top: 0,
      zIndex: 1,
      background: "#fff",
      padding: "10px 15px",
      direction: "rtl",
      lineHeight: 1.5,
      borderBottom: "1px solid #f2f2f2",
      height: 100,
      overflow: "hidden"
    }}
  >
    <div style={{ padding: "4px 0" }}>
      <div className="flex justify-between items-center mb-2">
        <Skeleton.Input
          active
          size="small"
          style={{
            width: 118,
            height: 28,
            borderRadius: 8,
            background:
              "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)"
          }}
        />

        <div className="flex items-center gap-2">
          <Skeleton.Avatar
            active
            size={32}
            shape="square"
            style={{ borderRadius: 6 }}
          />
          <Skeleton.Avatar
            active
            size={32}
            shape="square"
            style={{ borderRadius: 6 }}
          />
        </div>
      </div>

      <Divider style={{ margin: "10px 0", borderColor: "#e7e7e7" }} />

      <div className="flex justify-between items-center gap-5">
        <div className="flex items-center gap-6 overflow-x-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton
                active
                title={{ width: 85 + (i % 2) * 20 }}
                paragraph={{ rows: 0 }}
                style={{ margin: 0 }}
              />
              <Skeleton
                active
                title={{ width: 45 + (i % 2) * 15 }}
                paragraph={{ rows: 0 }}
                style={{ margin: 0 }}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Skeleton
            active
            title={{ width: 38 }}
            paragraph={{ rows: 0 }}
            style={{ margin: 0 }}
          />
          <Skeleton
            active
            title={{ width: 30 }}
            paragraph={{ rows: 0 }}
            style={{ margin: 0 }}
          />
        </div>
      </div>
    </div>
  </Header>
)

export const HeaderSection: React.FC<{
  children?: ReactNode
  loading?: boolean
}> = ({ children, loading = false }) => {
  if (loading) return <HeaderSectionSkeleton />

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        background: "#fff",
        padding: "10px 15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        direction: "rtl",
        borderBottom: "1px solid #f2f2f2",
        lineHeight: 1.5,
        height: 100,
        overflow: "hidden",
        whiteSpace: "nowrap"
      }}
    >
      {children ? (
        children
      ) : (
        <>
          <div className="flex justify-between items-center mb-1">
            <span
              className="px-1.5 py-0.5 rounded-md font-semibold text-[13px] h-[26px] inline-flex items-center"
              style={{ color: blue.primary, backgroundColor: blue[0] }}
            >
              دانشگاه تایمز
            </span>

            <div className="flex items-center gap-2">
              <Button
                icon={<SettingOutlined style={{ fontSize: 14 }} />}
                style={{
                  border: "1.5px solid #e7e7e7",
                  width: 28,
                  height: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                  padding: 0,
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = blue[4])
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#e7e7e7")
                }
              />
              <Avatar
                shape="square"
                className="cursor-pointer"
                src="/images/avatar.png"
                size={28}
                style={{
                  border: "2px solid #e7e7e7",
                  borderRadius: 4
                }}
              />
            </div>
          </div>

          <Divider style={{ margin: "10px 0", borderColor: "#e7e7e7" }} />

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div className="flex gap-2">
                <span style={{ color: gray[3] }}>تعداد دانش‌آموزها:</span>
                <span>۵۵۶ نفر</span>
              </div>
              <Divider
                type="vertical"
                style={{
                  height: "14px",
                  margin: "0 5px",
                  borderColor: "#e7e7e7"
                }}
              />
              <div className="flex gap-2">
                <span style={{ color: gray[3] }}>تعداد معلم‌ها:</span>
                <span>۲۰۵۸ نفر</span>
              </div>
              <Divider
                type="vertical"
                style={{
                  height: "14px",
                  margin: "0 5px",
                  borderColor: "#e7e7e7"
                }}
              />
              <div className="flex gap-2">
                <span style={{ color: gray[3] }}>تعداد رشته‌ها:</span>
                <span>۴۰ رشته</span>
              </div>
              <Divider
                type="vertical"
                style={{
                  height: "14px",
                  margin: "0 5px",
                  borderColor: "#e7e7e7"
                }}
              />
              <div className="flex gap-2">
                <span style={{ color: gray[3] }}>تعداد شعبه‌ها:</span>
                <span>۱۳ شعبه</span>
              </div>
            </div>
            <div className="flex gap-1">
              <span style={{ color: gray[4] }}>امروز</span>
              <span>۱۰ آبان ۱۴۰۴</span>
            </div>
          </div>
        </>
      )}
    </Header>
  )
}
