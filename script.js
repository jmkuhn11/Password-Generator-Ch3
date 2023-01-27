document.getElementById("generate").addEventListener("click", passwordPrompt);

function  passwordPrompt() {
  var passwordLength = window.prompt("Thank you for using us for your Password needs! How long would you like your Password to be? Please input a numerical value 8-128.");

  if (isNaN(passwordLength)) {
    window.alert("Sorry, you did not enter a numerical value. Please try again.");
  } else if (passwordLength < 8 || passwordLength > 128){
    window.alert("Sorry, you did not choose a number within the correct range. Please try again.");
  } else {
    chooseCharacters(passwordLength);
  }
}

function chooseCharacters(length) {
  var lc = window.confirm("Would you like to use lowercase characters in your password? Click 'OK' for yes, or click 'Cancel' for no.");
  var uc = window.confirm("Would you like to use uppercase characters in your password? Click 'OK' for yes, or click 'Cancel' for no.");
  var number = window.confirm("Would you like to use numbers in your password? Click 'OK' for yes, or click 'Cancel' for no.");
  var special = window.confirm("Would you like to use special characters in your password? Click 'OK' for yes, or click 'Cancel' for no.");

  if (!lc && !uc && !number && !special) {
    window.alert("Sorry, we cannot create a password if no characters are available to use. Please try again, selecting 'OK' for at least one of the options.");
  } else {
    genPassword(length, lc, uc, number, special);
  }
}

function genPassword(l, lc, uc, n, s) {
  var lcChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var ucChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChars = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '<', '>', '?', '.'];

  var combined = [];

  var password = ''

  if (lc) {
    combined = combined.concat(lcChars);
  }

  if (uc) {
    combined = combined.concat(ucChars);
  }

  if (n) {
    combined = combined.concat(numberChars);
  }

  if (s) {
    combined = combined.concat(specialChars);
  }

  for (let index = 0; index < l; index++) {
    var randomIndex = Math.floor(Math.random() * combined.length);
    var charChosen = combined[randomIndex];
    password = password.concat(charChosen);
  }

  var displaySection = document.getElementById("password")

  displaySection.textContent = password
}