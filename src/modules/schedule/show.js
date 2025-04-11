
//Seleciona as sections manhã, tarde e noite.
const periodMorning = document.querySelector(".morning ul")
const periodAfternoon = document.querySelector(".afternoon ul")
const periodNight = document.querySelector(".night ul")

export function schedulesShow({dailySchedules}){
  try{
  periodMorning.innerHTML = ""
  periodAfternoon.innerHTML = ""
  periodNight.innerHTML = ""

  dailySchedules.forEach((schedule)=>{
    const item = document.createElement("li")
    const hour = document.createElement("span")
    const animalName = document.createElement("span")
    const clientName = document.createElement("span")
    const serviceDescription = document.createElement("span")
    const removeBtn = document.createElement("button")

    item.setAttribute("data-id", schedule.id)
    removeBtn.setAttribute("type", "reset")

    item.classList.add("client")
    hour.classList.add("hour")
    animalName.classList.add("animal-name")
    clientName.classList.add("client-name")
    serviceDescription.classList.add("service-description")
    removeBtn.classList.add("remove-button")

    hour.textContent = schedule.hour
    animalName.textContent = schedule.animal
    clientName.textContent = schedule.client
    removeBtn.textContent = "Remover agendamento"

    let serviceText = schedule.service
    if (serviceText.length > 40) {
      serviceText = serviceText.slice(0, 25) + "..."
      serviceDescription.title = schedule.service
    }
    serviceDescription.textContent = serviceText

    item.append(hour, animalName, clientName, serviceDescription, removeBtn)

    const hourNumber = parseInt(schedule.hour.slice(0, 2))
    
    if (hourNumber <= 12){
      periodAfternoon.appendChild(item)
    } else if (hourNumber > 12 && hourNumber <= 18){
      periodAfternoon.appendChild(item)
    } else {
      periodNight.appendChild(item)
    }
  })
  } catch(error) {
    alert("Não foi possível exibir os agendamentos.")
    console.log(error)
  }
}

