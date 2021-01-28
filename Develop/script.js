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
  const getPasswordLength = () => {
    let passwordLength = window.prompt("Please enter how long you would like your password to be: (Choose a number between 8 and 128)");

    if (passwordLength >= 8 && passwordLength <= 128) {
      // create an empty array the length of passwordLength (the specified amount from the window input)
      passwordLength = Array.from({ length: passwordLength });

      newPasswordLength = passwordLength;
    } else {
      window.alert("Invalid input, please enter a number between 8 and 128 :)")
      getPasswordLength();
    }
    return newPasswordLength;
  }
  // call the password length function and assign the input to newPasswordLength
  newPasswordLength = getPasswordLength();

  // need to have special characters or not
  let getCharTypes = () => {
    // lowercase
    let charLowerCase = window.prompt("Would you like your password to contain lowercase characters? Please type yes or no.").toLowerCase();
    if (charLowerCase === "yes") { charLowerCase = alphabet }
    else if (charLowerCase === "no") { charLowerCase = null }
    else {
      window.alert("Please choose yes or no!");
      return getCharTypes();
    }
  }
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