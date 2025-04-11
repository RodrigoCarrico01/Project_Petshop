export function formatAnimalName(value) {
  return value.replace(/[^a-zA-Z\s]/g, "")
}