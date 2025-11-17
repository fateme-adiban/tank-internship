import { Layout } from "antd"

const { Content } = Layout

export const ContentSection: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return (
    <Content
      style={{
        margin: "10px",
        padding: "10px",
        minHeight: "calc(100vh - 64px)",
        borderRadius: 8
      }}
    >
      {children}
    </Content>
  )
}
