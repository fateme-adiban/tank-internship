import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import { ConfigProvider } from "antd"
import { timezTheme } from "../styles/theme"
import "antd/dist/reset.css"
import "./globals.css"

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin", "arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Tank Internship",
  description: "Created by Fateme Adiban"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} antialiased`}>
        <ConfigProvider theme={timezTheme}>{children}</ConfigProvider>
      </body>
    </html>
  )
}
