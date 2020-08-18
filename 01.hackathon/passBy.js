// We all know that JS supports only pass
// by reference - Can we prove the same
// by printing the values through a function
// call ?
// pass by value Or Pass By Reference
console.log("----------------------------");
var obj = { name: "sharu" };
console.log("Object - Before", obj.name);
//
function updObject(val) {
  val.name = val;
}
updObject("bharu");
//
console.log("Object - After", obj.name);
// Pass By Value
// An Objects value or here
// the name did not change
console.log("----------------------------");
var str = "sharu";
console.log("String - Before", str);
//
function chgString(value) {
  str = value;
}
chgString("bharu");
//
console.log("String - After", str);
// Pass By Reference
// the value did change
console.log("----------------------------");
var arr = ["sharu"];
console.log("Array - Before", arr);
//
function chgArray(value) {
  arr.push(value);
}
chgArray("bharu");
//
console.log("Array - After", arr);
// Pass By Reference
// the value did change
console.log("----------------------------");
var fn = () => "sharu";
console.log("Function - Before", fn());
//
function chgFunction(value) {
  fn = () => value;
}
chgFunction("bharu");
//
console.log("Function - After", fn());
// Pass By Reference
// the value did change
console.log("----------------------------");
