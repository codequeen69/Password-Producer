// Array variables
var characterLength ;
var characterChoice = [];
var lowerCaseArr =['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var characterArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Button event
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};
//Generate password from prompt input
function generatePassword(){
  var password = "";
  promptOptions ();
     for (var i=0; i < characterLength; i++){
  var randomIndex = Math.floor(Math.random() * characterChoice.length);
  var password = password + characterChoice [randomIndex];
    }
    return password;
  };
//Promts to set password parameters
function promptOptions (){
  characterChoice=[];
  //choose password length
characterLength = prompt("How many characters would you like your password to be? It must be between 8 and 128 characters");
if (characterLength < 8 || characterLength >128){
  alert("Character length must be between 8 and 128 characters");
  promptOptions();
} 
//Would user like to add lowercase letters?
var lowerCase = window.confirm("Would you like to use lowercase letters in your password?");
if(lowerCase){
  alert("Lowercase letters will be added to your password.");
  characterChoice = characterChoice.concat(lowerCaseArr);
}
  else {
    alert("Lowercase letters will NOT be used in your passoword.")
  }
  //Would user like to use uppercase letters?
  var upperCase = window.confirm("Would you like to use uppercase letters in your password?");
 if (upperCase){
  alert("Uppercase Letters will be added to your password.");
  characterChoice = characterChoice.concat(upperCaseArr);
  }
  else{
    alert("Uppercase letters will NOT be used in your password.")
  }
  //Would user like to use numbers?
  var number = window.confirm("Would you like to use numbers in your password?");
  if (number){
    alert("Numbers will be used in your password");
    characterChoice = characterChoice.concat(numberArr);
  }
  else{
    alert("Numbers will NOT be used in your password.");
  }
  //Would user like to use special characters?
  var character = window.confirm("Would you like to use special characters in your password?");
  if (character){
  alert("Special characters will be used in your password.");
  characterChoice = characterChoice.concat(characterArr);
  }
  else {
    alert("Characters will NOT be used in your password");
  }
  //If none of the options are chosen...
  if (!lowerCase && !upperCase && !number && !character){
    alert("You must choose at lease one option for password to be generated!");
    promptOptions();
  }
  return;
};

