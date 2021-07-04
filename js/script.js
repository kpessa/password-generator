/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getLength = () => {
  return +document.getElementById('length').value;
};

function getChoices() {
  var choices = {
    lowercaseAlphaChars: document.getElementById('lowercase').checked,
    uppercaseAlphaChars: document.getElementById('uppercase').checked,
    numericChars: document.getElementById('numeric').checked,
    specialChars: document.getElementById('specialChars').checked,
  };

  if (Object.values(choices).reduce((prev, curr) => prev + curr)) {
    return choices;
  } else {
    window.alert('Invalid Responses. You must select at least 1 character type!');
    return false;
  }
}

// ! ------------------------------------------------------------------
// !                          GENERATING STRING
// ! ------------------------------------------------------------------
function generateRandomString(choices, length, characters, validCharacters) {
  // debugger;
  let password = '';
  for (var i = 0; i < Object.keys(choices).length; i++) {
    if (Object.values(choices)[i]) {
      var tempCharArr = Object.values(characters)[i].split``;
      let index = Math.floor(Math.random() * tempCharArr.length);
      password += tempCharArr[index];
    }
  }

  for (var i = password.length; i < length; i++) {
    let index = Math.floor(Math.random() * validCharacters.length);
    password += validCharacters[index];
  }

  return password;
}

// Assignment code here
function generatePassword() {
  var length = getLength();
  let choices = getChoices();
  if (!choices) return;

  var characters = {
    lowercaseAlphaChars: 'abcdefghijklmnopqrstuvwxyz',
    uppercaseAlphaChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numericChars: '0123456789',
    specialChars: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
  };

  var validCharacters = '';
  for (var i = 0; i < Object.keys(choices).length; i++) {
    if (Object.values(choices)[i]) validCharacters += Object.values(characters)[i];
  }

  return generateRandomString(choices, length, characters, validCharacters);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
  }
}

let selectElement = document.getElementById('length');

for (let i = 8; i < 20; i++) {
  let optionElement = document.createElement('option');
  optionElement.setAttribute('value', i);
  optionElement.textContent = i;
  selectElement.appendChild(optionElement);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
