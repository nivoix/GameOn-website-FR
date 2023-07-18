
const form = document.querySelector("form")
// Ecoute le submit du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault()
  
  //récuperer les éléments du formulaire
  const first = document.getElementById("first")
  const last = document.getElementById("last")
  const email = document.getElementById("email")
  const birthdate = document.getElementById("birthdate")
  const quantity = document.getElementById("quantity")
  const location = document.querySelectorAll('.formData input.checkbox-input[name=location]')
  const checkbox1 = document.getElementById("checkbox1")
  const checkbox2 = document.getElementById("checkbox2")
  console.log(location);
  console.log(location[1].checked);
  console.log(quantity.value);
  /////////// controle des inputs /////////////////////////////////
  
  regexprenom= /^([^ ])(([A-Za-zÀ-ÿœ]{2,40})?(['.\ -]{0,5}))*$/;
  msgprenom = "Chiffes et symboles interdits.Maxi 40, mini 2 caractères";
  regexnom= /^([^ ])(([A-Za-zÀ-ÿœ]{2,30})?(['.\ -]{0,5}))*$/;
  msgnom = `Chiffes et symboles interdits.Maxi 30, mini 2 caractères`;
  regexemail= /^([^ ])[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
  msgemail = `Veuillez indiquer une adresse email valide`;
  msgbirthdate =`veuillez entrer une date valide`;
  regexquantity =/^[0-9]{0,1}[0-9]$/;
  msgquantity = `Veuillez indiquer une quantité entre 0 et 99`;
  
  function checkinput (regex, msg, inputValue,) {
    if(regex.test(inputValue)) {
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

  checkinput(regexprenom, msgprenom, first.value)
  checkinput(regexnom, msgnom, last.value)
  checkinput(regexemail, msgemail, email.value)
  checkinput(regexquantity, msgquantity, quantity.value)
  checkbirthdate(msgbirthdate, birthdate.value)
  //////////////////////////////////////////////////////////////////////////////
})
  
