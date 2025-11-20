export const ToPersianDate = (dateStr: string): string => {
  const date = new Date(dateStr)

  const formatter = new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  return formatter.format(date)
}
