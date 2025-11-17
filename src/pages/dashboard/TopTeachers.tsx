"use client"
import { List, Avatar } from "antd"
import { blue, grey } from "@ant-design/colors"
import { Teachers } from "../../utils/data"
import { ToPersian } from "@/utils/ToPersian"

export const TopTeachers = () => (
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
            <span style={{ fontWeight: 600 }}>{teacher.name}</span>
          </div>

          <div style={{ color: grey[1] }}>{ToPersian(teacher.class)} کلاس</div>
        </List.Item>
      )
    }}
  />
)
