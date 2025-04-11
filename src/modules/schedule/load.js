import { scheduleFetchByDay } from "../../services/fetch-schedule-by-day.js"
import {schedulesShow} from "../schedule/show.js"
import dayjs from 'dayjs'

//Seleciona o input de data.
const selectedDate = document.getElementById('date-filter')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')
selectedDate.value = inputToday

export async function schedulesDay(){
  //Obtem a data do input
  const date = selectedDate.value

  //Buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  // Exibe os agendamentos
  schedulesShow({dailySchedules})

}
selectedDate.addEventListener("change", schedulesDay)
