import { AdminLayout } from "@/components/AdminLayout"
import { Dashboard } from "@/pages/dashboard"

export default function Home() {
  return (
    <main>
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    </main>
  )
}
