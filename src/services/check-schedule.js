import { apiConfig } from "./api-config.js"

export async function isScheduleTaken(date, hour) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules?date=${date}&hour=${hour}`)
    const data = await response.json()

    return data.length > 0 // Se já existir pelo menos um, está ocupado
  } catch (error) {
    console.log(error)
    alert("Erro ao verificar agendamento. Tente novamente.")
    return true // Assume ocupado se deu erro na verificação
  }
}
