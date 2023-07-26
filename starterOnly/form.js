const form = document.querySelector("form")
// Ecoute le submit du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault()
})

// validation du formulaire 
function Validate(form) {
  //récuperer les éléments du formulaire
  const first = document.getElementById("first")
  const last = document.getElementById("last")
  const email = document.getElementById("email")
  const birthdate = document.getElementById("birthdate")
  const quantity = document.getElementById("quantity")
  const checkbox1 = document.getElementById("checkbox1")
  let inputbirtdate = false
  let inputlocation = false
  let inputcheckbox1 = false

  //expressions régullières et messages d'erreur
  regexprenom= /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/;
  msgprenom = "Chiffres et symboles interdits. Minimum 2 caractères.";
  regexnom= /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/;
  msgnom = `Chiffres et symboles interdits. Minimum 2 caractères.`;
  regexemail= /^([^ ])[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
  msgemail = `Veuillez indiquer une adresse email valide.`;
  msgbirthdate =`veuillez entrer une date valide.`;
  regexquantity =/^[0-9]{0,1}[0-9]$/;
  msgquantity = `Veuillez indiquer une quantité entre 0 et 99.`;
  msglocation = `Veuillez sélectionner la localisation d'un tournois.`;
  msgcheckbox1 = `Veuillez accepter les conditions d'utilisation.`
  
// controle des inputs first, last et email
  function checkinput (regex, msg, inputValue, inputError) {
    if(regex.test(inputValue)){
      toggleAttribute(inputError)
      inputcheck = true
      return true
    }else {
      setAttribute(msg, inputError)
      return false
    }
  }

  //controle de la date d'anniversaire
  function checkbirthdate (msg, inputValue, inputError) {
    let todayDate = new Date()
    let year = todayDate.getFullYear()
    let inputYear = inputValue.split('-')
    let inputYearValue = inputYear[0]
    if((year-inputYearValue)>=18 && (year-inputYearValue)<100) {
      toggleAttribute(inputError)
      inputbirtdate = true
      return true
    }else {
      setAttribute(msg, inputError)
      return false
    }
  }

  // controle de la localisation cochée
  function checklocation(msg, inputError) {
  const checkboxes = document.querySelectorAll(".checkbox-input[type=radio]");
    if(Array.from(checkboxes).some((checkbox) => checkbox.checked)) {
      toggleAttribute(inputError)
      inputlocation = true
      return true
    } else{
      setAttribute(msg, inputError)
      return false
    }
  }

  //controle des conditions d'utilisation cochées
  function checkcheckbox1(msg, inputValue, inputError){
    if(inputValue) {
      toggleAttribute(inputError)
      inputcheckbox1 = true
      return true
    } else{
      setAttribute(msg, inputError)
    }
  }
  
  // 2 fonctions pour afficher ou non le message d'erreur avec son style
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
// controle du formulaire et mise en page modal de fin
  function controleform() {
    if(inputfirst && inputlast && inputemail && inputquantity && inputbirtdate && inputlocation && inputcheckbox1){
      document.querySelector("form").style.display = "none"
      let divconfirm = document.createElement("div")
      let btnclose = document.createElement("button")
      let textconfirm = document.createElement("span")
      document.querySelector(".modal-body").appendChild(divconfirm)
      divconfirm.className = "contentconfirm"
      document.querySelector(".contentconfirm").appendChild(textconfirm)
      document.querySelector(".contentconfirm").appendChild(btnclose)
      textconfirm.className = "textconfirm"
      textconfirm.innerHTML= "Merci pour<br></br> votre inscription !"
      btnclose.className = "btn-submit"
      btnclose.innerText = "Fermer"
      btnclose.addEventListener("click", () => {
        CloseModal
        location.reload()
      })
    }
  }

  // appel des fonctions de controle
  let inputfirst = checkinput(regexprenom, msgprenom, first.value, "first")
  let inputlast = checkinput(regexnom, msgnom, last.value, "last")
  let inputemail = checkinput(regexemail, msgemail, email.value, "email")
  let inputquantity = checkinput(regexquantity, msgquantity, quantity.value, "quantity")
  checkbirthdate(msgbirthdate, birthdate.value, "birthdate")
  checklocation(msglocation, "radio")
  checkcheckbox1(msgcheckbox1, checkbox1.checked, "checkbox1")
  controleform()
}