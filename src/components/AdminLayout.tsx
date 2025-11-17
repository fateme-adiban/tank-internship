"use client"
import { useState } from "react"
import { Layout } from "antd"
import { blue } from "@ant-design/colors"
import { SidebarMenu } from "./SidebarMenu"
import { HeaderSection } from "./HeaderSection"
import { ContentSection } from "./ContentSection"

const { Sider } = Layout

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => setCollapsed(!collapsed)

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
