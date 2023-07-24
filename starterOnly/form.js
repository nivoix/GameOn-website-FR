const form = document.querySelector("form")
// Ecoute le submit du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault()
})

// validation du formulaire 
function Validate() {
  //récuperer les éléments du formulaire
  const first = document.getElementById("first")
  const last = document.getElementById("last")
  const email = document.getElementById("email")
  const birthdate = document.getElementById("birthdate")
  const quantity = document.getElementById("quantity")
  const location = document.querySelectorAll('.formData input.checkbox-input[name=location]')
  const checkbox1 = document.getElementById("checkbox1")
  const checkbox2 = document.getElementById("checkbox2")
  /////////// controle des inputs /////////////////////////////////

  regexprenom= /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/;
  msgprenom = "Chiffes et symboles interdits. Minimum 2 caractères.";
  regexnom= /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/;
  msgnom = `Chiffes et symboles interdits. Minimum 2 caractères.`;
  regexemail= /^([^ ])[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
  msgemail = `Veuillez indiquer une adresse email valide.`;
  msgbirthdate =`veuillez entrer une date valide.`;
  regexquantity =/^[0-9]{0,1}[0-9]$/;
  msgquantity = `Veuillez indiquer une quantité entre 0 et 99.`;
  msglocation = `Veuillez sélectionner la localisation d'un tournois.`;
  msgcheckbox1 = `Veuillez accepter les conditions d'utilisation.`
  

  function checkinput (regex, msg, inputValue, inputError) {
    if(regex.test(inputValue)){
      toggleAttribute(inputError)
      return true
    }else {
      setAttribute(msg, inputError)
      return false
    }
  }
  function checkbirthdate (msg, inputValue, inputError) {
    let todayDate = new Date()
    let year = todayDate.getFullYear()
    let inputYear = inputValue.split('-')
    let inputYearValue = inputYear[0]
    if((year-inputYearValue)>=18 && (year-inputYearValue)<100) {
      toggleAttribute(inputError)
      return true
    }else {
      setAttribute(msg, inputError)
      return false
    }
  }

  function checklocation(msg, inputValue, inputError) {
  const checkboxes = document.querySelectorAll(".checkbox-input[type=radio]");
    if(Array.from(checkboxes).some((checkbox) => checkbox.checked)) {
        toggleAttribute(inputError)
        return true
      } else{
        setAttribute(msg, inputError)
        return false
      }
  }

  function checkcheckbox1(msg, inputValue, inputError){
    if(inputValue) {
      toggleAttribute(inputError)
      return true
    } else{
      setAttribute(msg, inputError)
    }
  }
  
  function toggleAttribute(inputError) {
    let formDataError = document.querySelector(`.${inputError}`)
    formDataError.toggleAttribute("data-error")
    formDataError.toggleAttribute("data-error-visible")
  }
  function setAttribute(msg, inputError) {
    let formDataError = document.querySelector(`.${inputError}`)
      formDataError.setAttribute("data-error", msg)
      formDataError.setAttribute("data-error-visible","true")
  }

  checkinput(regexprenom, msgprenom, first.value, "first")
  checkinput(regexnom, msgnom, last.value, "last")
  checkinput(regexemail, msgemail, email.value, "email")
  checkinput(regexquantity, msgquantity, quantity.value, "quantity")
  checkbirthdate(msgbirthdate, birthdate.value, "birthdate")
  checklocation(msglocation, location, "radio")
  checkcheckbox1(msgcheckbox1, checkbox1.checked, "checkbox1" )
  //////////////////////////////////////////////////////////////////////////////
}