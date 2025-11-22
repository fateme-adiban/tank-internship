import { useState, useEffect } from "react"

export type AttendanceItem = {
  day: string
  value: number
}

export type TeacherAttendanceItem = {
  teacher: string
  value: number
}

export type StudentAttendanceItem = {
  date: string
  day: string
  before_12: number
  after_12: number
}

export type StudentByGroupItem = {
  name: string
  value: number
}

export type ChartData = {
  attendance: AttendanceItem[]
  teacherAttendance: TeacherAttendanceItem[]
  studentAttendance: StudentAttendanceItem[]
  studentByGroup: StudentByGroupItem[]
  loading: boolean
}

export const useChartData = (): ChartData => {
  const [data, setData] = useState<ChartData>({
    attendance: [],
    teacherAttendance: [],
    studentAttendance: [],
    studentByGroup: [],
    loading: true
  })

  useEffect(() => {
    const loadData = async () => {
      try {
        const {
          DataBarChart,
          TeacherAttendanceChartData,
          StudentAttendanceChartData,
          StudentAttendanceByGroupChartData
        } = await import("@/utils/data")

        await new Promise((resolve) => setTimeout(resolve, 1200))

        setData({
          attendance: DataBarChart as AttendanceItem[],
          teacherAttendance:
            TeacherAttendanceChartData as TeacherAttendanceItem[],
          studentAttendance:
            StudentAttendanceChartData as StudentAttendanceItem[],
          studentByGroup:
            StudentAttendanceByGroupChartData as StudentByGroupItem[],
          loading: false
        })
      } catch (err) {
        console.error(err)
        setData((prev) => ({ ...prev, loading: false }))
      }
    }

    loadData()
  }, [])

  return data
}
