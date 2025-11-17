"use client"
import { Menu } from "antd"
import { gray } from "@ant-design/colors"
import {
  DashboardOutlined,
  BookOutlined,
  CalendarOutlined,
  UserOutlined,
  BankOutlined,
  SettingOutlined,
  FileTextOutlined,
  PieChartOutlined
} from "@ant-design/icons"
import { useRouter, usePathname } from "next/navigation"
import { useMemo } from "react"

const menuItems = [
  { key: "/dashboard", icon: <DashboardOutlined />, label: "داشبورد" },
  { key: "/classes", icon: <BookOutlined />, label: "کلاس‌ها" },
  { key: "/calendar", icon: <CalendarOutlined />, label: "تقویم" },
  {
    key: "/u",
    icon: <UserOutlined />,
    label: "کاربران",
    children: [
      { key: "/u/teachers", label: "معلم" },
      { key: "/u/students", label: "دانش‌آموزان" },
      { key: "/u/staffs", label: "کارمندان" }
    ]
  },
  {
    key: "/faculties",
    icon: <BankOutlined />,
    label: "اطلاعات مرکز آموزشی",
    children: [
      { key: "/faculties/list", label: "شعبه" },
      { key: "/faculties/fields-groups", label: "رشته‌ها و گروه‌ها" },
      { key: "/faculties/general-information", label: "اطلاعات عمومی" }
    ]
  },
  {
    key: "/general-config",
    icon: <SettingOutlined />,
    label: "تنظیمات عمومی",
    children: [
      { key: "/general-config/dictionary", label: "واژه‌نامه" },
      { key: "/general-config/permission", label: "تنظیمات دسترسی" }
    ]
  },
  { key: "/voting", icon: <FileTextOutlined />, label: "نظرسنجی" },
  { key: "/reports", icon: <PieChartOutlined />, label: "گزارش" }
]

export const SidebarMenu: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  const selectedKey = useMemo(() => {
    if (!pathname || pathname === "/" || pathname === "/dashboard")
      return "/dashboard"
    const allItems = menuItems.flatMap((item) =>
      item.children ? [item, ...item.children] : [item]
    )
    const match = allItems.find((item) => pathname.startsWith(item.key))
    return match ? match.key : "/dashboard"
  }, [pathname])

  const openKeys = useMemo(() => {
    if (!pathname) return []
    const parent = menuItems.find((item) =>
      item.children?.some((child) => pathname.startsWith(child.key))
    )
    return parent ? [parent.key] : []
  }, [pathname])

  if (!pathname) {
    return null
  }

  const buildMenuItems = () =>
    menuItems.map((item) => ({
      key: item.key,
      icon: item.icon,
      label: item.label,
      onClick: !item.children ? () => router.push(item.key) : undefined,
      children: item.children?.map((child) => ({
        key: child.key,
        label: child.label,
        onClick: () => router.push(child.key),
        style: { paddingRight: 40 }
      }))
    }))

  return (
    <Menu
      mode="inline"
      theme="light"
      selectedKeys={[selectedKey]}
      defaultOpenKeys={openKeys}
      items={buildMenuItems()}
      style={{
        marginRight: "10px",
        fontSize: "13px",
        color: gray[7],
        borderInlineEnd: "none"
      }}
    />
  )
}
