
const form = document.querySelector("form")
// Ecoute le submit du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log(form);
  
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
  
  regexprenom= /^([^ ])(([A-Za-zÀ-ÿœ]{2,40})?(['.\ -]{0,5}))*$/;
  msgprenom = "Chiffes et symboles interdits.Maxi 40, mini 2 caractères";
  regexnom= /^([^ ])(([a-zA-ZÀ-ÿœ\,\'\.\ \-]{2,30}))*$/;
  msgnom = `Chiffes et symboles interdits.Maxi 30, mini 2 caractères`;
  regexemail= /^([^ ])[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
  msgemail = `Veuillez indiquer une adresse email valide`;
  
  function checkinput (regex, msg, inputValue,) {
    if(regex.test(inputValue)) {
      return true
    }else {
      console.log(msg);
      return false
    }
  }
  checkinput(regexprenom, msgprenom, first.value)
  checkinput(regexnom, msgnom, last.value)
  checkinput(regexemail, msgemail, email.value)
  //////////////////////////////////////////////////////////////////////////////
})
  
  
  