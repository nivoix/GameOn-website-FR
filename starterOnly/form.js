
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
  console.log(checkbox1.checked);

  regexprenom= /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/;
  msgprenom = "Chiffes et symboles interdits.Minimum 2 caractères";
  regexnom= /(^[A-Z]+[ \-'])?([[a-zA-ZÀ-ÿœé])+([ \-'])?]*([a-zA-ZÀ-ÿœ])+$/;
  msgnom = `Chiffes et symboles interdits.Mini 2 caractères`;
  regexemail= /^([^ ])[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
  msgemail = `Veuillez indiquer une adresse email valide`;
  msgbirthdate =`veuillez entrer une date valide`;
  regexquantity =/^[0-9]{0,1}[0-9]$/;
  msgquantity = `Veuillez indiquer une quantité entre 0 et 99`;
  msglocation = `Veuillez sélectionner la localisation d'un tournois`;
  msgcheckbox1 = `Veuillez accepter les conditions d'utilisation`
  
  function checkinput (regex, msg, inputValue) {
    if(regex.test(inputValue)){
      return true
    }else {
      console.log(msg);
      return false
    }
  }
  function checkbirthdate (msg, inputValue) {
    let todayDate = new Date()
    let year = todayDate.getFullYear()
    let inputYear = inputValue.split('-')
    let inputYearValue = inputYear[0]
    if((year-inputYearValue)>=18 && (year-inputYearValue)<100) {
      return true
    }else {
      console.log(msg);
      return false
    }
  }

  function checklocation(msg, inputValue) {
    for(let i=0; i < inputValue.length; i++) {
      if(inputValue[i].checked) {
        return true
      } else{
        console.log(msg)
        return false
      }
    }
  }

  function checkcheckbox1(msg, inputValue){
    if(inputValue) {
      return true
    }
    console.log(msg);
  }

  checkinput(regexprenom, msgprenom, first.value)
  checkinput(regexnom, msgnom, last.value)
  checkinput(regexemail, msgemail, email.value)
  checkinput(regexquantity, msgquantity, quantity.value)
  checkbirthdate(msgbirthdate, birthdate.value)
  checklocation(msglocation, location)
  checkcheckbox1(msgcheckbox1, checkbox1.checked )
  //////////////////////////////////////////////////////////////////////////////
}
  