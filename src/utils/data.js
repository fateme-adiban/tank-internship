export const StudentAttendanceChartData = [
  { date: "2025-10-26", day: "شنبه", before_12: 20, after_12: 50 },
  { date: "2025-10-27", day: "یک‌شنبه", before_12: 40, after_12: 50 },
  { date: "2025-10-28", day: "دو‌شنبه", before_12: 20, after_12: 40 },
  { date: "2025-10-29", day: "‌سه‌شنبه", before_12: 50, after_12: 30 },
  { date: "2025-10-30", day: "چهار‌شنبه", before_12: 30, after_12: 40 },
  { date: "2025-10-1", day: "پنج‌شنبه", before_12: 40, after_12: 30 },
  { date: "2025-10-2", day: "جمعه", before_12: 10, after_12: 40 }
]

export const DataCardChart = [
  { date: "2025-10-26", main: 0, base: 0 },
  { date: "2025-10-27", main: 0, base: 0 },
  { date: "2025-10-28", main: 0, base: 10 },
  { date: "2025-10-29", main: 0, base: 0 },

  { date: "2025-10-30", main: 100, base: 5 },

  { date: "2025-10-1", main: 0, base: 0 },
  { date: "2025-10-2", main: 0, base: 0 },
  { date: "2025-10-3", main: 0, base: 5 },
  { date: "2025-10-4", main: 0, base: 0 },

  { date: "2025-10-5", main: 100, base: 4 },

  { date: "2025-10-6", main: 0, base: 0 },
  { date: "2025-10-7", main: 0, base: 0 },
  { date: "2025-10-8", main: 0, base: 3 },
  { date: "2025-10-9", main: 0, base: 0 },

  { date: "2025-10-10", main: 100, base: 3 },

  { date: "2025-10-11", main: 0, base: 0 },
  { date: "2025-10-12", main: 0, base: 0 },
  { date: "2025-10-13", main: 0, base: 2 },
  { date: "2025-10-14", main: 0, base: 0 },

  { date: "2025-10-15", main: 100, base: 2 },

  { date: "2025-10-16", main: 0, base: 0 },
  { date: "2025-10-17", main: 0, base: 5 },
  { date: "2025-10-18", main: 0, base: 0 },
  { date: "2025-10-19", main: 0, base: 0 }
]

export const DataBarChart = [
  { day: "شنبه", value: 1 },
  { day: "یک‌شنبه", value: 0.5 },
  { day: "دوشنبه", value: 1 },
  { day: "سه‌شنبه", value: 0.8 },
  { day: "چهارشنبه", value: 0.7 },
  { day: "پنج‌شنبه", value: 1 },
  { day: "جمعه", value: 0.9 }
]

export const TeacherAttendanceChartData = [
  { teacher: "مهدی باختری", value: 100 },
  { teacher: "مهدی پناهی", value: 60 },
  { teacher: "ملیکا واعظ", value: 100 },
  { teacher: "علی لطفی", value: 70 },
  { teacher: "فاطمه ادیبان", value: 80 },
  { teacher: "زینب شیدایی", value: 100 },
  { teacher: "هانیه انصاری", value: 60 }
]

export const Teachers = [
  { name: "مهدی پناهی", rank: 1, class: 2 },
  { name: "یعقوب خاکباز", rank: 2, class: 1 },
  { name: "مهدی وهابی", rank: 3, class: 1 },
  { name: "مهدی باختری", rank: 4, class: 1 }
]

export const StudentsWithMostAbsences = [
  { name: "دکتر‌الهام‌یاوری", rank: 1, class: 1 },
  { name: "آقای‌واعظی", rank: 2, class: 1 },
  { name: "علی‌مطهری", rank: 3, class: 1 },
  { name: "حسن‌گلپرور", rank: 4, class: 1 },
  { name: "دکتر‌یاسین‌کیخا", rank: 5, class: 1 }
]

export const StudentsWithHighestAttendance = [
  { name: "رضا‌قمی", rank: 1, class: 2 },
  { name: "ملیکا‌واعظ", rank: 2, class: 1 },
  { name: "علی‌مطهری", rank: 3, class: 1 },
  { name: "حسن‌گلپرور", rank: 4, class: 1 },
  { name: "مهدی‌پناهی", rank: 5, class: 1 }
]

export const SessionsHeldCount = [
  { name: "دانشکده‌اصلی", rank: 1, class: 122 },
  { name: "فنی‌مهندسی", rank: 2, class: 585 }
]

export const CanceledSessionsCount = [
  { name: "دانشکده‌اصلی", rank: 1, class: 1 },
  { name: "فنی‌مهندسی", rank: 2, class: 2 }
]

export const sectionOptions = [
  { value: "main", label: "دانشکده‌اصلی" },
  { value: "eng", label: "فنی‌مهندسی" },
  { value: "basic", label: "علوم‌پایه" },
  { value: "accounting-faculty", label: "دانشکده‌حسابداری" },
  { value: "quran", label: "دانشکده‌قرآن‌و‌حدیث" },
  { value: "accounting", label: "حسابداری" },
  { value: "medicine", label: "دانشکده‌پزشکی" },
  { value: "research", label: "علوم‌تحقیقات" },
  { value: "mech-eng", label: "دانشکده‌مهندسی‌مکانیک" },
  { value: "central", label: "دانشکده‌مرکزی" },
  { value: "law", label: "دانشکده‌حقوق" },
  { value: "literature", label: "دانشکده‌ادبیات" },
  { value: "theology", label: "دانشکده‌الهیات" }
]

export const StudentAttendanceByGroupChartData = [
  { name: "مهندسی‌کامپیوتر", value: 50 },
  { name: "صنایع", value: 60 },
  { name: "برق", value: 80 },
  { name: "مهندسی‌پزشکی", value: 90 },
  { name: "عمران", value: 100 },
  { name: "نرم‌افزار", value: 85 },
  { name: "روان‌پزشکی", value: 70 }
]
