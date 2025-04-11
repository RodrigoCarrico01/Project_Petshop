import { apiConfig } from "./api-config"

export async function scheduleDelete({ id }){
  try{
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: 'DELETE',
    })
    alert("Agendamento removido com sucesso!")
  } catch (error) {
    console.log(error)
    alert("Não foi possível remover o agendamento.")
  }
}