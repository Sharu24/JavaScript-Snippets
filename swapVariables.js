// jshint esversion:6

//***************************************************//
// Different ways to Swap Two Variables in JavaSript //
//***************************************************//

let var1 = 4;
let var2 = 6;

// Method #1
// Using addition and subtraction only, no temp variables
// Works well with Numbers (Decimal and floating point)
console.log("Add/Subtract Method - Pre  :", var1, var2);
var1 = var1 + var2; // var1 = 10, var2 = 6
var2 = var1 - var2; // var1 = 10, var2 = 4
var1 = var1 - var2; // var1 = 6, var2 = 4
console.log("Add/Subtract Method - Post :", var1, var2);

// Mehod #2
// Using Multiplication and Division only, no temp variables
// Works well with Numbers (Decimal and floating point)
console.log("Multiply/Divide Method - Pre :", var1, var2);
var1 = var1 * var2; // var1 = 24, var2 = 6
var2 = Math.floor(var1 / var2); // var1 = 24, var2 = 4
var1 = Math.floor(var1 / var2); // var1 = 6, var2 = 4
console.log("Multiply/Divide Method - Post :", var1, var2);

// Method #3
// Using XOR Operator, no temp variables
// Not ideally suitable for Strings, Works well with numbers
console.log("XOR Method - Pre :", var1, var2);
var1 = var1 ^ var2; // var1 = 2, var2 = 6
var2 = var1 ^ var2; // var1 = 2, var2 = 4
var1 = var1 ^ var2; // var1 = 6, var2 = 4
console.log("XOR Method - Post :", var1, var2);

// Method #4
// Using XNOR Operator, no temp variables
// var 1 = 0100 , var2 = 0110
// Not ideally suitable for Strings, Works well with numbers
console.log("XNOR Method - Pre :", var1, var2);
var1 = ~(var1 ^ var2); // var1 = 1101, var2 = 0110
var2 = ~(var1 ^ var2); // var1 = 1101, var2 = 0100
var1 = ~(var1 ^ var2); // var1 = 0110, var2 = 0100
console.log("XNOR Method - Post :", var1, var2);

// Method #5
// Using temporary variables to store and swap
// Works well with any Character in Charset
console.log("Temporary Storage Method - Pre :", var1, var2);
let temp = var1; //temp = 4, var1 = 4, var2 = 6
var1 = var2; //var1 = 6, var2 = 6
var2 = temp; //var1 = 6, var2 = 4
console.log("Temporary Storage Method - Post :", var1, var2);
