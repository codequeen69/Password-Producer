// Assignment code here
var characterLength ;
var choiceArr = [];
var lowerCaseArr =['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var basket = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function promptOptiions (){
characterLength = window.prompt("How many characters would you like your password to be? It must be between 8 and 128 characters");
if (characterLength < 8 || characterLength >128){
  alert("Character length must be between 8 and 128 characters");
  promptOptiions();
} else{
  var lowerCase = window.confirm("Would you like to use lowercase letters in your password?");
  var upperCase = window.confirm("Would you like to use uppercase letters in your password?");
  var number = window.confirm("Would you like to use numbers in your password?");
  var characters = window.confirm("Would you like to use spacial characters in your password?");
  return {lowerCase, upperCase, number, characters}
}

}
function generatePassword(){
var passwordOptions=promptOptiions()
  var basket= ""
   for (var i=0; i < characterLength; i++){

     
  }
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
