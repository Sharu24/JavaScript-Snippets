//**************************************************** */
// To Accept a User input and display the respective
// ASCII notation in Decimal and Binary
// Approach -
// 1. Create an Object with ASCII Decimals for all characters
// 2. Get the user Input and map to ASCII Decimal
// 3. Get the Correspnding Binaries and pad them to 8 digits
// 4. Display the Binaries to the Console
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

function addBin(bin1, bin2) {
  var total = "",
    res,
    csum = [];

  res = [0, 0];

  var b1a = bin1.split("");
  if (bin2 === 1) {
    console.log("bin2 == 1");
    bin2 = padNum(bin2, 8, 0);
  }
  var b2a = bin2.split("");

  for (var i = b1a.length - 1; i >= 0; i--) {
    res = fullAdder(b1a[i], b2a[i], res[1]);
    total = res[0] + total;
  }
  csum[0] = total;
  csum[1] = res[1];

  return csum;
}

function flipBin(csum) {
  var cs = csum.split("");
  var flip = "";
  for (var b in cs) {
    flip += !Number(cs[b]) ? "1" : "0";
  }
  return flip;
}

// CheckSum - Starts
function checkSum(binArr) {
  var i = 0;

  var csum = [];
  csum[0] = 0;
  csum[1] = 0;

  //console.log("In CheckSUm", binArr);

  if (binArr.length <= 1) {
    csum[0] = binArr[0].join("");
    return flipBin(csum[0]);
  }
  do {
    if (csum[0] === 0) {
      csum[0] = binArr[0];
      i++;
      continue;
    }
    csum = addBin(csum[0], binArr[i]);
    while (csum[1] === 1) {
      csum = addBin(csum[0], csum[1]);
    }
    i++;
  } while (i < binArr.length);
  console.log("Final Sum before flipping = ", csum[0]);
  if (csum[0]) return flipBin(csum[0]);
}
// CheckSum - Ends

buildASCII();

// Split the user Input into an Array
var userArray = "xyzABC".split("");
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

console.log(checkSum(binaryUser));
