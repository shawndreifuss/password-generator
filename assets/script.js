// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables 
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = [1,2,3,4,5,6,7,8,9,0]
var special = ["!","@","#","$","%","^","&","*","()","+","<",">","?","~","<","/",">"]
var characters = []



//input password length if not a number ,  <8 or >128 will return to start of function 
function generatePassword () {
var passLength = prompt("How many characters do you want your password to be?")
if ( passLength < 8 || passLength > 128 || isNaN(passLength) ) {
  alert("must be a number betwween 8 and 128 characters!")
generatePassword()
} 
 var hasLowerCase = confirm("would you like to include lowercase letters")

 var hasUpperCase = confirm("would you like to include uppercase letters")
 
 var hasNumbers = confirm("would you like to include number characters")

 var hasSpecialCharacters = confirm("would you like to include special characters")
 //variable to put the selected items in the password
var passwordOptions = []

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


//for loop to generate random lowercase, uppercase, numbers and special characters to the length of the input
  for ( var i=0; i < passLength; i++ ) {
  var randomPass = Math.floor(Math.random() * passwordOptions.length);
  var randomChars = passwordOptions[randomPass]
  console.log(randomChars)
  characters.push(randomChars)
  }
  return characters.join("");
}
  
  



 

  //given code 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;







// Write password to the #password input
generateBtn.addEventListener("click", writePassword);
}
writePassword()
// Add event listener to generate button






