"use client"
import { AdminLayout } from "@/components/AdminLayout"
import { Dashboard } from "../dashboard"
import { Loading } from "@/components/Loading"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <AdminLayout>
      <Dashboard />
    </AdminLayout>
  )
}
