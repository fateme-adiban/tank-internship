"use client"
import { Spin } from "antd"

export const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999
      }}
    >
      <Spin size="large" />
    </div>
  )
}
