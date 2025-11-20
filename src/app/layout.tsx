import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import { ConfigProvider } from "antd"
import { timezTheme } from "../styles/theme"
import { HydrationFix } from "@/components/HydrationFix"
import "./globals.css"

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirmatn.variable} antialiased`}
        suppressHydrationWarning
      >
        <ConfigProvider theme={timezTheme}>
          <HydrationFix />
          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}
