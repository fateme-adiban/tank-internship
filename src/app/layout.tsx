import "./globals.css"
import { ConfigProvider } from "antd"
import localFont from "next/font/google"
import { HydrationFix } from "@/components/HydrationFix"
import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Tank Internship",
  description: "Created by Fateme Adiban"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={vazirmatn.className} suppressHydrationWarning>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Vazirmatn"
            }
          }}
          direction="rtl"
        >
          <HydrationFix />
          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}
