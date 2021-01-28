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

    //uppercase
    let charUpperCase = window.prompt("Would you like your password to contain uppercase characters? Please type yes or no.").toLowerCase();
    if (charUpperCase === "yes") { charUpperCase = alphabetCap }
    else if (charUpperCase === "no") { charUpperCase = null }
    else {
      window.alert("Please choose yes or no!");
      return getCharTypes();
    }

    //numbers
    let charNumbers = window.prompt("Would you like your password to contain numbers? Please type yes or no.").toLowerCase();
    if (charNumbers === 'yes') { charNumbers = numbers }
    else if (charNumbers === 'no') { charNumbers = null }
    else {
      window.alert("Please choose yes or no!");
      return getCharTypes();
    }

    //special characters
    let charSpecial = window.prompt("Would you like your password to contain special characters? Please type yes or no.").toLowerCase();
    if (charSpecial === "yes") { charSpecial = specialChars }
    else if (charSpecial === "no") { charSpecial = null }
    else {
      window.alert("Please choose yes or no!");
      return getCharTypes();
    }

    //takes array of all character types and converts them to one string
    let passwordChars = [charLowerCase, charUpperCase, charSpecial, charNumbers].join("")
    //return to beginning of function if no valid selection are made.
    if (!passwordChars) {
      window.alert("You must select at least one type of character for your password! Please try again!");
      return getCharTypes();
    } else {
      window.alert("Conditions accepted! Preparing to generate password now!")

    }
    return passwordChars;
  }
  passwordChars = getCharTypes();
  password = "";
  for (i = 0; i < newPasswordLength.length; i++) {
      let c = Math.floor(Math.random() * passwordChars.length);
      password += passwordChars.charAt(c)
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