//user clicks a button
    //event listener, calling a function to write password
    //inside our function we prompt for password length
        //var passwordLength = prompt("How many characters would you like your password to contain?");
            //we need to validate the prompt so that it meets criteria, must be a number, greater than 8 and less than 129
        //then user is prompted password length

        //if(passwordLength <8) {
            //alert('Password length must be at least 8 characters');
        //}

//then user confirms password criteria
    //var hasNumeric = confirm("Click OK to confirm including numeric characters.");
    //var hasLower = confirm("Click OK to confirm including numeric characters.");
    //var hasUpper = confirm("Click OK to confirm including numeric characters.");
    //var has Special = confirm("Click OK to confirm including numeric characters.");

    //if(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false) {
        //alert('Must select at least one character type')
    //}

    //object to store user input
    //var userPassword = {
        //length: passwordLength.
        //hasNumeric: hasNumeric,
        //hasLower: hasLower,
        //hasUpper: hasUpper,
        //hasSpecial: hasSpecial
    //}
    //return userPassword

    //create another function to generate the password
    //var userOption = getOptions();
    //we have an array to store each criteria
    //var possibleChars = [];
    //var result = [];
    //var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    //if(userOptions.hasNumeric === true) {
        //possibleChars = possibleChars.concat(numericCharacters);
    //}

//then password is displayed on the screen



// // Assignment Code...

// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);