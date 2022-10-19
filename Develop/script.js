// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function genreratePassword() {

  var passLength = prompt("How long do you want your password to be? It should be no less than 8 characters and more than 128 characters.");

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
