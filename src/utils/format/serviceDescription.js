export function formatServiceDescription(value) {
  const cleaned = value.replace(/[0-9]/g, "")        
  return cleaned.slice(0, 425)               
}