import { formatPhoneNumber, formatAnimalName, formatClientName, formatServiceDescription, formatTodayDate, formatOnlyFullHours } from "../../utils/format"

const clientNameInput = document.getElementById("client-name")
const animalNameInput = document.getElementById("animal-name")
const phoneNumberInput = document.getElementById("phone-number")
const serviceDescriptionTextarea = document.getElementById("service-description")
const dateInput = document.getElementById("date")
const hourInput = document.getElementById("hour")


clientNameInput.addEventListener("input", () => {
  clientNameInput.value = formatClientName(clientNameInput.value)
})

animalNameInput.addEventListener("input", () => {
  animalNameInput.value = formatAnimalName(animalNameInput.value)
})

phoneNumberInput.addEventListener("input", () => {
  phoneNumberInput.value = formatPhoneNumber(phoneNumberInput.value)
})

serviceDescriptionTextarea.addEventListener("input", () => {
  serviceDescriptionTextarea.value = formatServiceDescription(serviceDescriptionTextarea.value)
})

dateInput.value = formatTodayDate()
dateInput.min = formatTodayDate()

hourInput.value = formatOnlyFullHours()
hourInput.min = "09:00"
hourInput.max = "21:00"

hourInput.addEventListener("input", () => {
  hourInput.value = formatOnlyFullHours(hourInput.value)
})