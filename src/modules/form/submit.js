const form = document.querySelector('form')
import {scheduleNew} from "../../services/schedule-new.js"
import { isScheduleTaken } from "../../services/check-schedule-date.js"

//campos
const clientNameInput = document.getElementById("client-name")
const animalNameInput = document.getElementById("animal-name")
const phoneNumberInput = document.getElementById("phone-number")
const serviceDescriptionTextarea = document.getElementById("service-description")
const dateInput = document.getElementById("date")
const hourInput = document.getElementById("hour")

form.addEventListener("submit", async (event)=>{
  event.preventDefault()
  try{
    //validar cliente
     const client = clientNameInput.value.trim()
     if(!client){
      return alert("Preencha o nome do cliente.")
    }

    //validar animal
     const animal = animalNameInput.value.trim()
     if(!animal){
      return alert("Preencha o nome do animal.")
    }

    //validar telefone
    const rawPhone = phoneNumberInput.value
    const phone = rawPhone.replace(/\D/g, '') 
    if (!phone || phone.length < 11) {
      return alert("Insira um número de telefone válido com 11 dígitos.")
    }

    //validar serviço
    const service = serviceDescriptionTextarea.value.trim()
    if(!service || service.length < 4){
     return alert("Preencha a descrição de serviço com no mínimo 4 caracteres.")
   }

   const date = dateInput.value
   const hour = hourInput.value
   const id = new Date().getTime()

   const isTaken = await isScheduleTaken(date, hour)
   if (isTaken) {
     return alert("Já existe um agendamento para essa data e hora.")
   }

   await scheduleNew({
    id,
    client,
    animal,
    phone, 
    service,
    date,
    hour,
  })

    clientNameInput.value = ""
    animalNameInput.value = ""
    phoneNumberInput.value = ""
    serviceDescriptionTextarea.value = ""

    }catch(error){
      console.log(error)
      alert("Erro no processo de submeter o form!")
  }
})