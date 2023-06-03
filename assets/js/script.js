// Assignment code here


function generatePassword () {

    var options = [];
    var userInput =window.prompt ("Choose a password length between 8 and 128 characters ");
    if (userInput < 8) { generatePassword() }

    var lowerCase =window.confirm ("Include lowercase characters? ");
    if (lowerCase == true){
        var lowerLetters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
        options.push(...lowerLetters);
    }

    var upperCase= window.confirm ("Include uppercase characters? ");
    if (upperCase == true) {
        var upperLetters= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        options.push(...upperCase);
    }    
    var numeric= window.confirm ("Include numeric characters? ");
    if (numeric== true) {
        var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        options.push(...numeric);
    }
    var specChar= window.confirm ("Include special characters? ");
    if (specChar==true){
        var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "{", "]", "}", ";", ":", "'", '"', ",", "<", ".", ">", "?", "/"];
        options.push(...specChar);
    }
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