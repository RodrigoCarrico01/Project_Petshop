import dayjs from "dayjs"

export function formatTodayHour() {
  return dayjs().format("HH:mm")
}

export function formatOnlyFullHours(timeString = formatTodayHour()) {
  const [hour, _] = timeString.split(":").map(Number)

  if (hour < 9 || hour > 21){
    alert("A hora tem que ser entre 9 e 21")
  }

  const clampedHour = Math.min(Math.max(hour, 9), 21)

  return `${String(clampedHour).padStart(2, "0")}:00`
}