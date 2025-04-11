import {scheduleDelete} from "../../services/schedule-delete.js"
import {schedulesDay} from "./load.js"
const lists = document.querySelectorAll("ul")

lists.forEach((list) => {

  list.addEventListener("click", async (event) => {
    if(event.target.classList.contains("remove-button")){
      const item = event.target.closest("li")

      const {id} = item.dataset

      if(id){
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
        if (isConfirm){
         
          await scheduleDelete({id})

          schedulesDay()
        }
      }
    }
  })
  
})


