// Assignment code here
var options = [];


function generatePassword () {
    var userInput =window.prompt ("Choose a password length between 8 and 128 characters ");
    if (userInput < 8 || userInput > 128) { generatePassword() }

    var lowerCase =window.confirm ("Include lowercase characters? ");
    console.log(lowerCase);
    if (lowerCase){
        var lowerLetters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
        options.push(...lowerLetters);
    }
    var upperCase= window.confirm ("Include uppercase characters? ");
    console.log(upperCase);
    if (upperCase) {
        var upperLetters= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        options.push(...upperLetters);
    }    
    var numeric= window.confirm ("Include numeric characters? ");
    console.log(numeric);
    if (numeric) {
        var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        options.push(...numeric);
    }
    var specChar= window.confirm ("Include special characters? ");
    console.log(specChar);
    if (specChar){
        var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "{", "]", "}", ";", ":", "'", '"', ",", "<", ".", ">", "?", "/"];
        options.push(...specChar);
    }
    var finalPassword= randomChar(userInput);

    return finalPassword;
}

function randomChar (userInput) {
    var passwordValue=[];
    for (var i=0; i < userInput; i++) {
        var randomValue= Math.floor(Math.random()*options.length); 
        passwordValue.push(options[randomValue]);
    }
    return passwordValue.join("");
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