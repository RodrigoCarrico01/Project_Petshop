import dayjs from "dayjs"

export function formatTodayDate() {
  return dayjs().format("YYYY-MM-DD")
}