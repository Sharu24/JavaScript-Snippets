//**************************************************** */
// To Accept a User input and display the respective
// ASCII notation in Decimal and Binary
//**************************************************** */

//Declare and Initialize the object to store the ASCII in Decimals
var asciiObj = {};

// Function to build an ASCII Object
// 'asciiObj' is a global object
function buildASCII() {
  // Build a String with a subset of charactoers
  // split them into an array of characters
  var charArray = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~".split(
    ""
  );
  //Reference - http://www.asciitable.com/
  // First element starts with a space
  // and the rest follows as a sequence (increment 1)
  for (var i = 0; i < charArray.length; i++) {
    asciiObj[charArray[i]] = i + 32;
  }
}

// Function to get the Binary of a Number
// Recursive Approach - excepts a Decimal and returns a Binary String
function getBinary(num) {
  var arr = [];
  function getBinaryRecursive(num, arr) {
    if (num === 0) {
      return;
    } else {
      getBinaryRecursive(Math.floor(num / 2), arr);
      arr.push(num % 2);
    }
  }
  getBinaryRecursive(num, arr);
  return arr.join("");
}

// Function to pad a number
// Recursive Approach - accepts string, fixed length and value to pad
function padNum(binNum, len, value) {
  if (binNum.length >= len) {
    return binNum;
  } else {
    return padNum(value + binNum, len, value);
  }
}

// Build ASCII Object
buildASCII();

//var userInput = prompt("Please Enter a String: ");
// var userInput = "AB CD";
var userInput = "CO/DE 2019";
// var userInput = "xyzABC@123/*^ The Hacking School";
var asciiUser = [];
var binaryUser = [];

// Split the user Input into an Array
var userArray = userInput.split("");

for (var j = 0; j < userArray.length; j++) {
  // Push the ASCII Decimal into an Array, Get Binary and Pad
  asciiUser.push(asciiObj[userArray[j]]);
  var binNum = getBinary(asciiObj[userArray[j]]);
  binaryUser.push(padNum(binNum, 8, 0));

  //console.log(userArray[j], asciiObj[userArray[j]], binaryUser[j]);
}

// Print Output to the Console
console.log(binaryUser);
