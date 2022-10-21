// Variables for Users choice of included characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".toString().split("");
var specialCharacters = "!@#$%^&*()<>?-=+_".toString().split("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function 'randomSelector' is using min and max retrieve items in the array from the lowest to the highest values.
// Function 'randomSelector' and function 'randomItem' selects random characters from the variable list(s).
function randomSelector(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var random = Math.random();
  return Math.floor(min * (1 - random) + random * max);

}

function randomItem(list) {
  return list[randomSelector(list.length)];
}

function generatePassword() {
  // Length of the password determined by the user.
  var passLength = prompt("How long do you want your password to be? It should be no less than 8 characters and more than 128 characters.");

  // If user cancels the prompt.
  if (passLength === null) {
    return;
  }

  // If user input is not a number (NaN).
  if(isNaN(passLength)) {
    alert("Not a number. Please try again.");
    return(generatePassword());
  }

  // User input is invalid if the length is not within the range of >= 8 or <= 128.
  if (passLength <= 8 || passLength >= 128) {
    alert("Invalid. Please choose a password length between 8 and 128 characters.");
    return(generatePassword());
  }


// variable where selected arrays will get pushed to if user confirms them.
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

  // Default in the case that all 'if statements' are false. Creates their random password using the upperCase array.
  if (chosenCharacters === 0) {
    chosenCharacters.push(upperCase)
  }

  var passwordCharacters = ""  

  // 'for loop' that selected a random character (characterItem) from the selected lists (listArray) and adds them to an empty string (passwordCharacters) using '+='.
  for (var i = 0; i < passLength; i++) {
    var listArray = randomItem(chosenCharacters);
    var characterItem = randomItem(listArray);
    passwordCharacters += characterItem;
  }


 return passwordCharacters;
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
