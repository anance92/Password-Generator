// Assignment code here
// Password Characters
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let alphabetCapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let integers = '0123456789'
let specialCharacters = "!$%&'()*+,-./:;<=>?@[]^_`{|}~"
let password = "";

// create the generatePassword function

const generatePassword = () => {

  // need to get the password length

  // need to have special characters or not

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);