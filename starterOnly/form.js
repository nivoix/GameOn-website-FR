//controle de l'évènement par défaut de la soumission du formulaire
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
  const checkbox1 = document.getElementById("checkbox1")
  let inputbirtdate = false
  let inputlocation = false
  let inputcheckbox1 = false

//expressions régulières et messages d'erreur
  regexprenom= /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/;
  msgprenom = "Chiffres et symboles interdits. Minimum 2 caractères.";
  msgprenomok = "Saisie validée";
  regexnom= /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/;
  msgnom = `Chiffres et symboles interdits. Minimum 2 caractères.`;
  msgnomok = "Saisie validée";
  regexemail= /^([^ ])[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
  msgemail = `Veuillez indiquer une adresse email valide.`;
  msgemailok = "Saisie validée";
  regexquantity =/^[0-9]{0,1}[0-9]$/;
  msgquantity = `Veuillez indiquer une quantité entre 0 et 99.`;
  msgquantityok = "Saisie validée";
  msgbirthdate =`veuillez entrer une date valide.`;
  msgbirthdateok = "Saisie validée";
  msglocation = `Veuillez sélectionner la localisation d'un tournois.`;
  msglocationok = "Saisie validée";
  msgcheckbox1 = `Veuillez accepter les conditions d'utilisation.`;
  msgcheckbox1ok = "Saisie validée";
  
// controle des inputs first, last, email et quantity
  function checkinput (regex, msg, inputValue, inputError, msgvalid) {
    if(regex.test(inputValue)){
      toggleAttribute(msgvalid, inputError)
      return true
    }else {
      setAttribute(msg, inputError)
      return false
    }
  }

//controle de la date d'anniversaire
  function checkbirthdate (msg, inputValue, inputError, msgvalid) {
    let todayDate = new Date()
    let year = todayDate.getFullYear()
    let inputYear = inputValue.split('-')
    let inputYearValue = inputYear[0]
    if((year-inputYearValue)>=18 && (year-inputYearValue)<100) {
      toggleAttribute(msgvalid,inputError)
      inputbirtdate = true
      return true
    }else {
      setAttribute(msg, inputError)
      return false
    }
  }

// controle de la localisation cochée
  function checklocation(msg, inputError, msgvalid) {
  const checkboxes = document.querySelectorAll(".checkbox-input[type=radio]");
    if(Array.from(checkboxes).some((checkbox) => checkbox.checked)) {
      toggleAttribute(msgvalid, inputError)
      inputlocation = true
      return true
    } else{
      setAttribute(msg, inputError)
      return false
    }
  }

//controle des conditions d'utilisation cochées
  function checkcheckbox1(msg, inputValue, inputError, msgvalid){
    if(inputValue) {
      toggleAttribute(msgvalid, inputError)
      inputcheckbox1 = true
      return true
    } else{
      setAttribute(msg, inputError)
    }
  }
  
// 2 fonctions pour afficher ou non le message d'erreur avec son style////////////
  function toggleAttribute(msgvalid, inputError) {
    let formDataError = document.querySelector(`.${inputError}`)
    formDataError.removeAttribute("data-error")
    formDataError.removeAttribute("data-error-visible")
    formDataError.setAttribute("data-valid", msgvalid)
    formDataError.setAttribute("data-valid-visible","true")
  }
  function setAttribute(msg, inputError) {
    let formDataError = document.querySelector(`.${inputError}`)
    formDataError.removeAttribute("data-valid")
    formDataError.removeAttribute("data-valid-visible")
    formDataError.setAttribute("data-error", msg)
    formDataError.setAttribute("data-error-visible","true")
  }
/////////////////////////////////////////////////////////////////////////////////

// controle du formulaire complet 
  function controleform() {
    if(inputfirst && inputlast && inputemail && inputquantity && inputbirtdate && inputlocation && inputcheckbox1){
      document.querySelector("form").style.display = "none"
      launchModalConfirm()
    }
  }
  
// mise en place modal de confirmation
  function launchModalConfirm(){
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

  // appel des fonctions de controle des inputs
  let inputfirst = checkinput(regexprenom, msgprenom, first.value, "first", msgprenomok)
  let inputlast = checkinput(regexnom, msgnom, last.value, "last", msgnomok)
  let inputemail = checkinput(regexemail, msgemail, email.value, "email", msgemailok)
  let inputquantity = checkinput(regexquantity, msgquantity, quantity.value, "quantity", msgquantityok)
  checkbirthdate(msgbirthdate, birthdate.value, "birthdate", msgbirthdateok)
  checklocation(msglocation, "radio", msglocationok)
  checkcheckbox1(msgcheckbox1, checkbox1.checked, "checkbox1", msgcheckbox1ok)
  controleform()
}