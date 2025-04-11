import { apiConfig } from "./api-config.js"

export async function scheduleNew({id, client, animal, phone, service, date, hour}){
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id, client, animal, phone, service, date, hour})
    })

    //Exibir uma mensagem de sucesso
    alert("Agendamento realizado com sucesso")
  } catch(error){
    console.log(error)
    alert("Não foi possível agendar. Tentar novamente mais tarde.")
  }
}