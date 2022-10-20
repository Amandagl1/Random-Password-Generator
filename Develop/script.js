// Variables for Users choice of included characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".toString().split("");
var specialCharacters = "!@#$%^&*()<>?-=+_".toString().split("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function randomSelector() {
  return Math.floor(Math.random());
}

function generatePassword() {

  var passLength = prompt("How long do you want your password to be? It should be no less than 8 characters and more than 128 characters.");

  // If user cancels the prompt
  if (passLength === null) {
    return;
  }

  if(isNaN(passLength)) {
    alert("Not a number. Please try again.");
    return(generatePassword());
  }

  if (passLength <= 8 || passLength >= 128) {
    alert("Invalid. Please choose a password length between 8 and 128 characters.");
    return(generatePassword());
  }



  var chosenCharacters = []

// 'if' statements confirming if the user wants to include the set of characters.
  var upperTrue = confirm("Would you like to include Uppercase letters?")

  if(upperTrue) {
    chosenCharacters.push(upperCase)
  }

  var lowerTrue = confirm("Would you like to include Lowercase letters?");
  
  if(lowerTrue) {
    chosenCharacters.push(lowerCase)
  }

  var numTrue = confirm("Would you like to include Numbers?");

  if(numTrue) {
    chosenCharacters.push(numbers)
  }

  var specialTrue = confirm("Would you like to include Special Characters?");

  if(specialTrue) {
    chosenCharacters.push(specialCharacters)
  }

  if (chosenCharacters === 0) {
    chosenCharacters.push(upperCase)
  }

  var passwordCharacters = ""

  for (var i = 0; i < passLength; i++);
    

//   for (var i = 0; i < passLength; i++) {
//     var randomSet = chosenCharacters(selectedCharacters[i]);
//     passwordCharacters += randomSet;
//   }

 return generatePassword
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
  passwordText.value = password;
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
