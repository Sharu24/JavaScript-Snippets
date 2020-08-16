//**************************************************** */
// To Accept a User input and display the respective
// ASCII notation in Decimal and Binary
// Approach -
// 1. Create an Object with ASCII Decimals for all characters
// 2. Get the user Input and map to ASCII Decimal
// 3. Get the Correspnding Binaries and pad them to 8 digits
// 4. Display the Binaries to the Console
//
// CheckSum Generation
// 1. Get the array with 8 Bit Binaries
// 2. For each 8-Bit Binary Element
// 2.1 Add the Binaries in sequence
// 2.2 Ensure that the carry out's are added to incremental
//     Summations proceeding to pick the next index
// 2.3 Utilize a Full Adder Logic to add individual bits
// 2.4 Reserve the Summation at the end to get the CheckSum
//**************************************************** */

//Declare and Initialize the object to store the ASCII in Decimals
var asciiObj = {};

// Function to build an ASCII Object
function buildASCII() {
  for (var i = 1; i < 127; i++) {
    asciiObj[String.fromCharCode(i)] = i;
  }
}

// Function to get the Binary of a Number
function getBinary(num) {
  if (num === 0) return 0;
  else return (num % 2) + 10 * getBinary(Math.floor(num / 2));
}

// Function to pad a number
function padNum(binNum, len, value) {
  if (binNum.length >= len) return binNum;
  else return padNum(value + "" + binNum, len, value);
}

// Binary Full Adder - Start
// Sum = A ⊕ B ⊕ Cin
// Cout = AB ||  Cin (A ⊕ B)
function bxor(b1, b2) {
  return b1 ^ b2;
}

function band(b1, b2) {
  return b1 & b2;
}

function bor(b1, b2) {
  return b1 || b2;
}

function halfAdder(b1, b2) {
  var sum = b1 ^ b2;
  var cout = b1 & b2;
  return [sum, cout];
}

function fullAdder(b1, b2, cin) {
  var ha1 = halfAdder(b1, b2);
  var ha2 = halfAdder(ha1[0], cin);
  return [ha2[0], ha1[1] || ha2[1]];
}
// Binary Full Adder - End

// Add Two Binaries using Full Adder
function addBin(bin1, bin2) {
  // To store the output of individual bits
  var csum = [],
    total = "",
    res = [0, 0];

  // Split the first Input into individual bits
  var b1a = bin1.split("");

  // Perform below only for Carry Over's
  if (bin2 && bin2.length === 1) {
    bin2 = padNum(bin2, 8, 0);
  }

  // Split the second Input into individual bits
  var b2a = bin2.split("");

  // Add from least significant bit and loop
  for (var i = b1a.length - 1; i >= 0; i--) {
    res = fullAdder(b1a[i], b2a[i], res[1]);
    // res[0] holds sum and res[1] holds the carry
    total = res[0] + total;
  }
  csum[0] = total;
  csum[1] = res[1];

  // Return the Binary Sum and Carry over back
  return csum;
}

// Function to reverse the Binary Bits of a Number
function flipBin(csum) {
  var cs = csum.split("");
  var flip = "";
  for (var b in cs) {
    flip += parseInt(cs[b]) ? "0" : "1";
  }
  return flip;

  //return csum.split("").reverse().join("");
}

// CheckSum - Starts
function checkSum(binArr) {
  // To Loop through each Binary Number
  var i = 0;

  // Array the store the Incremental Checksum results
  // Index 0 - the Sum of two Binaries
  // Index 1 - the Carry Out of the Sum
  var csum = [0, 0];

  // If there is only only Binary Number,
  // Reserve the bits and return the number
  if (binArr.length <= 1) {
    csum[0] = binArr[0].join("");
    return flipBin(csum[0]);
  }

  // If there are more than 1 Binaries
  // Loop through each Binary Element in the array
  // and add it to the incremental CheckSum csum[0]
  do {
    // To store the first Binary as a Incremental result
    if (!csum[0]) {
      csum[0] = binArr[0];
      i++;
      continue;
    }
    // Add the two Binaries
    csum = addBin(csum[0], binArr[i]);
    // If there is a Carry, Add the carry back
    // to the Incremental Binary until there is no carry
    while (csum[1]) {
      csum = addBin(csum[0], csum[1]);
    }
    i++;
  } while (i < binArr.length);
  //console.log("Final Sum before flipping = ", csum[0]);
  // Pre-flipped Checksum will be in csum[0]
  // Reverse the bits and return back
  if (csum[0]) return flipBin(csum[0]);
}
// CheckSum - Ends

buildASCII();

// Split the user Input into an Array
var userArray = " -- ".split("");
var asciiUser = [],
  binaryUser = []; // To store Decimal ASCII and binaries

for (var j = 0; j < userArray.length; j++) {
  // Push the ASCII Decimal into an Array, Get Binary and Pad
  asciiUser.push(asciiObj[userArray[j]]);
  var binNum = getBinary(asciiObj[userArray[j]]);
  binaryUser.push(padNum(binNum, 8, 0));
}

// Print Output to the Console
console.log(binaryUser);

// generate a CheckSum before the message
// is published to the receiver
console.log(checkSum(binaryUser));
