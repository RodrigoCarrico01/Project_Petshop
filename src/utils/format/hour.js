import dayjs from "dayjs"

export function formatTodayHour() {
  return dayjs().format("HH:mm")
}
