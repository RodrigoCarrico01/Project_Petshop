export function formatClientName(value) {
  return value.replace(/[^a-zA-Z\s]/g, "")
}