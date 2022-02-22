//create character set for password
const charsetl = "abcdefghijklmnopqrstuvwxyz";
const charsetu = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*_-+=";

//declaring variables
const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incLower= document.getElementById("lower");
const incUpper= document.getElementById("upper");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const settings = document.getElementById("settings");

//generating password function

const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

//taking in user-selected criteria
generateBtn.addEventListener("click", () => {
  let characters = "";
  incLower.checked ? (characters += charsetl) : "";
  incUpper.checked ? (characters += charsetu) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
  document.getElementById("password").textContent = passwordTxt;
  
  //hide settings until button is clicked
  if (settings.style.display === "none"){
    settings.style.display = "block"
  }else {
    settings.style.display = "block";
  };

});





