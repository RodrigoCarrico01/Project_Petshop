export function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11)

  const part1 = digits.slice(0, 2)
  const part2 = digits.slice(2, 3)
  const part3 = digits.slice(3, 7)
  const part4 = digits.slice(7, 11)

  let formatted = ""

  if (part1) formatted += `(${part1}`
  if (part1.length === 2) formatted += `)`
  if (part2) formatted += ` ${part2}`
  if (part3) formatted += ` ${part3}`
  if (part4) formatted += `-${part4}`

  return formatted
}
