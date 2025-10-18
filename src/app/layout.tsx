import type { Metadata } from "next"
import { Lalezar } from "next/font/google"
import "./globals.css"

const lalezar = Lalezar({
  variable: "--font-lalezar",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Tank Internship",
  description: "Created by Fateme Adiban",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={`${lalezar.variable} antialiased`}>{children}</body>
    </html>
  )
}
