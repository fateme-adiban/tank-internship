"use client"
import { useState } from "react"
import { Layout, Drawer, Avatar, Button, Divider } from "antd"
import { gray } from "@ant-design/colors"
import { SettingOutlined } from "@ant-design/icons"
import { blue } from "@ant-design/colors"
import { SidebarMenu } from "./SidebarMenu"
import { HeaderSection } from "./HeaderSection"
import { ContentSection } from "./ContentSection"
import { MenuOutlined } from "@ant-design/icons"
import { useMediaQuery } from "react-responsive"

const { Sider } = Layout

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 })

  const [collapsed, setCollapsed] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggle = () => setCollapsed(!collapsed)
  const openDrawer = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)

  if (isMobile) {
    return (
      <Layout style={{ minHeight: "100vh", direction: "rtl" }}>
        <HeaderSection>
          <div className="flex justify-between items-center mb-1">
            <div className="flex gap-3 items-center">
              <div
                onClick={openDrawer}
                style={{
                  cursor: "pointer"
                }}
              >
                <MenuOutlined style={{ fontSize: 15 }} />
              </div>
              <span
                className="px-1.5 py-0.5 rounded-md font-semibold text-[13px] h-[26px] inline-flex items-center"
                style={{ color: blue.primary, backgroundColor: blue[0] }}
              >
                دانشگاه تایمز
              </span>
            </div>

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
            <div
              className="flex gap-4 overflow-x-auto"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                paddingLeft: 4
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              <div className="flex gap-2 whitespace-nowrap">
                <span style={{ color: gray[3] }}>تعداد دانش‌آموزها:</span>
                <span>۵۵۶ نفر</span>
              </div>

              <Divider
                type="vertical"
                style={{ height: 14, margin: "0 10px", borderColor: "#e7e7e7" }}
              />

              <div className="flex gap-2 whitespace-nowrap">
                <span style={{ color: gray[3] }}>تعداد معلم‌ها:</span>
                <span>۲۰۵۸ نفر</span>
              </div>

              <Divider
                type="vertical"
                style={{ height: 14, margin: "0 10px", borderColor: "#e7e7e7" }}
              />

              <div className="flex gap-2 whitespace-nowrap">
                <span style={{ color: gray[3] }}>تعداد رشته‌ها:</span>
                <span>۴۰ رشته</span>
              </div>

              <Divider
                type="vertical"
                style={{ height: 14, margin: "0 10px", borderColor: "#e7e7e7" }}
              />

              <div className="flex gap-2 whitespace-nowrap">
                <span style={{ color: gray[3] }}>تعداد شعبه‌ها:</span>
                <span>۱۳ شعبه</span>
              </div>

              <div style={{ minWidth: 16, flexShrink: 0 }} />
            </div>

            <div className="flex gap-1">
              <span style={{ color: gray[4] }}>امروز</span>
              <span>۱۰ آبان ۱۴۰۴</span>
            </div>
          </div>
        </HeaderSection>

        <ContentSection>{children}</ContentSection>

        <Drawer
          placement="right"
          open={drawerOpen}
          onClose={closeDrawer}
          width="100%"
          styles={{ body: { padding: 0 } }}
          closable={true}
          title={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                paddingRight: 12
              }}
            >
              <img src="/images/logo.svg" alt="لوگو" style={{ height: 35 }} />
              <span
                style={{ fontSize: 18, fontWeight: 600, color: blue.primary }}
              >
                تایمز
              </span>
            </div>
          }
        >
          <div style={{ paddingTop: 16 }}>
            <SidebarMenu />
          </div>
        </Drawer>
      </Layout>
    )
  }

  return (
    <Layout style={{ minHeight: "100vh", direction: "rtl" }}>
      <Sider
        width={260}
        collapsedWidth={70}
        theme="light"
        collapsible
        collapsed={collapsed}
        trigger={null}
        style={{
          position: "fixed",
          zIndex: 2,
          top: 0,
          height: "100vh",
          paddingInline: collapsed ? 0 : 10,
          borderLeft: "1px solid #f2f2f2"
        }}
      >
        <div
          className="flex items-center gap-2 cursor-pointer transition-all duration-300"
          style={{
            height: 40,
            margin: 16,
            marginRight: 22,
            background: "#fff",
            borderRadius: 8,
            overflow: "hidden"
          }}
          onClick={toggle}
        >
          <img src="/images/logo.svg" alt="logo" />
          {!collapsed && (
            <span
              className="text-2xl transition-opacity duration-300"
              style={{ color: blue.primary }}
            >
              تایمز
            </span>
          )}
        </div>

        <SidebarMenu />
      </Sider>

      <Layout
        style={{
          marginRight: collapsed ? 70 : 260,
          transition: "margin-right 0.2s ease"
        }}
      >
        <HeaderSection />
        <ContentSection>{children}</ContentSection>
      </Layout>
    </Layout>
  )
}
