"use client"
import { List, Avatar, Skeleton } from "antd"
import { blue, grey } from "@ant-design/colors"
import { Teachers } from "../utils/data"
import { ToPersian } from "@/utils/ToPersian"

const TopTeachersSkeleton = () => (
  <div
    style={{
      direction: "rtl",
      height: 280,
      overflow: "hidden",
      paddingInline: 8
    }}
  >
    {[1, 2, 3, 4].map((item) => (
      <div
        key={item}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBlock: 12,
          paddingInline: 8,
          marginBottom: 8
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Skeleton.Avatar
            active
            size={25}
            shape="circle"
            style={{
              background: "#e6f7ff"
            }}
          />

          <Skeleton.Input
            active
            size="small"
            style={{
              width: 120,
              height: 18,
              borderRadius: 6
            }}
          />
        </div>
      </div>
    ))}
  </div>
)

export const TopTeachers: React.FC<{ loading?: boolean }> = ({
  loading = false
}) => {
  if (loading) {
    return <TopTeachersSkeleton />
  }

  return (
    <List
      dataSource={Teachers}
      split={false}
      style={{
        direction: "rtl",
        height: 280,
        overflowY: "auto",
        paddingInline: 8
      }}
      renderItem={(teacher) => {
        const isTop3 = teacher.rank <= 3

        return (
          <List.Item
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBlock: 10,
              paddingInline: 8
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f5f5f5")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Avatar
                style={{
                  backgroundColor: isTop3 ? blue.primary : "transparent",
                  color: isTop3 ? "#fff" : blue.primary,
                  fontWeight: "bold",
                  width: 25,
                  height: 25
                }}
              >
                {ToPersian(teacher.rank)}
              </Avatar>
              <span>{teacher.name}</span>
            </div>

            <div style={{ color: grey[1] }}>
              {ToPersian(teacher.class)} کلاس
            </div>
          </List.Item>
        )
      }}
    />
  )
}
