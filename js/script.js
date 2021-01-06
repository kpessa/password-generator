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
  let answer = '';
  answer = window.prompt('Length of password?');
  answer = parseInt(answer);
  if (8 <= answer && answer <= 128) {
    return answer;
  } else {
    window.alert('Invalid response. Length needs to be between 8 and 128 characters. Try again!');
  }
  getLength();
};

function getChoices() {
  var choices = {
    lowercaseAlphaChars: window.confirm('lowercase?'),
    uppercaseAlphaChars: window.confirm('uppercase?'),
    numericChars: window.confirm('numeric?'),
    specialChars: window.confirm('special characters?'),
  };

  if (Object.values(choices).reduce((prev, curr) => prev + curr)) {
    return choices;
  } else {
    window.alert('Invalid Responses. You must select at least 1 character type!');
  }
  getChoices();
}

// ! ------------------------------------------------------------------
// !                          GENERATING STRING
// ! ------------------------------------------------------------------
function generateRandomString(choices, length, characters, validCharacters) {
  // debugger;
  let password = '';
  for (var i = 0; i < Object.keys(choices).length; i++) {
    if (Object.values(choices)[i]) {
      var tempCharArr = Object.values(characters)[i];

      var tempChar = '';
      while (!tempChar) tempChar = tempCharArr[getRandomInt(0, tempCharArr.length - 1)];
      password += tempChar;
    }
  }

  for (var i = password.length; i < length; i++) {
    password += validCharacters[getRandomInt(0, validCharacters.length)];
  }

  return password;
}

// Assignment code here
function generatePassword() {
  var length = getLength();
  let choices = getChoices();

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
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
