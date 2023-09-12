// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = [1,2,3,4,5,6,7,8,9,0]
var special = ["!","@","#","$","%","^","&","*","()","+","<",">","?","~","<","/",">"]

var passwordOptions = []

function randomPass() {
 var pass = passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
}

function generatePassword () {
var length = prompt("How many characters do you want your password to be?")
if ( length < 8 || length > 128 || isNaN(length) ) {
  alert("must be a number betwween 8 and 128 characters!")
generatePassword()
} 
 var hasLowerCase = confirm("would you like to include lowercase letters")

 var hasUpperCase = confirm("would you like to include uppercase letters")
 
 var hasNumbers = confirm("would you like to include number characters")

 var hasSpecialCharacters = confirm("would you like to include special characters")
 
 if (hasLowerCase) {
  passwordOptions = passwordOptions.concat(lowerCase)
 
 } 
 if (hasUpperCase) {
  passwordOptions = passwordOptions.concat(upperCase)
 
 } 
 if (hasNumbers) {
  passwordOptions = passwordOptions.concat(numbers)
 
 } 
 if (hasSpecialCharacters) {
  passwordOptions = passwordOptions.concat(special)
 }



  for ( var i=0; i < passwordOptions.length; ) {
  randomPass(passwordOptions)
  }
}


 

  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;







// Write password to the #password input
generateBtn.addEventListener("click", writePassword);
}
writePassword()
// Add event listener to generate button






