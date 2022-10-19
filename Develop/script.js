// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var passLength = prompt("How long do you want your password to be? It should be no less than 8 characters and more than 128 characters.");

  if(isNaN(passLength)) {
    alert("Not a number. Try again!");
    return(generatePassword());
  }

  if (passLength <= 8 || passLength >= 128) {
    alert("Password does not meet the criteria!");
    return(generatePassword());

  }

  var upperTrue = confirm("Would you like to include Uppercase letters?")

  if(upperTrue) {

  }

  var lowerTrue = confirm("Would you like to include Lowercase letters?");
  
  if(lowerTrue) {

  }

  var numTrue = confirm("Would you like to include Numbers?");
  
  if(numTrue) {

  }

  var specialTrue = confirm("Would you like to include Special Characters?");
  
  if(specialTrue) {

  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
