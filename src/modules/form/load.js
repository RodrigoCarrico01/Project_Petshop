const redirectBtn = document.getElementById("redirect-form")
const popup = document.querySelector(".pop-up")
const scheduleForm = document.querySelector(".schedule-form")

redirectBtn.addEventListener("click", (event)=>{
  popup.style.display = "flex"
})

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none"
  }
})