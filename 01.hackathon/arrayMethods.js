// jshint esversion:6
// ES-6 Methods and explanation
// map, sort, filter, reduce, find
// forEach, every, some

var techLang = [
  { rank: 8, value: "MongoDB" },
  { rank: 10, value: "PHP" },
  { rank: 4, value: "SpringBoot" },
  { rank: 1, value: "Java" },
  { rank: 3, value: "Dot Net" },
  { rank: 2, value: "JavaScript" },
  { rank: 6, value: "TypeScript" },
  { rank: 9, value: "Golang" },
  { rank: 5, value: "ReactJS" },
  { rank: 7, value: "NodeJS" }
];
console.log(techLang);
/*------------------------------------------------*/
// map()
// Shorthand of a for loop which also returns back
// an Array

var mapLang = techLang.map((ele, index, arr) => {
  var rlang = {};
  rlang[ele.rank] = ele.value;
  return rlang;
});
console.log(mapLang);

/*------------------------------------------------*/
// sort()
// Sorts the values

var sortLang = mapLang.sort((lang1, lang2) => {
  return Object.keys(lang1) - Object.keys(lang2);
});
console.log(sortLang);

/*------------------------------------------------*/
// filter()
// filters the values
var filteredLang = sortLang.filter(ele => {
  var str = ele[Object.keys(ele)].toLowerCase().replace(/ /g, "");
  return str.includes("js") || str.includes("javascript");
});

console.log(filteredLang);

/*------------------------------------------------*/
// reduce
// reduces the values
var reducer = (acc, curr) => {
  return (acc + parseInt(Object.keys(curr))) / 2;
};
var reducedLang = filteredLang.reduce(reducer, 0);

console.log(reducedLang);
/*------------------------------------------------*/
//f ind
var findLang = filteredLang.find(ele => ele[Object.keys(ele)].includes("JS"));
console.log(findLang);
/*------------------------------------------------*/
// forEach
var feLang = filteredLang.forEach(ele => console.log(ele[Object.keys(ele)]));
console.log(feLang);
/*------------------------------------------------*/
// every
var everyLang = filteredLang.every(ele => console.log(ele[Object.keys(ele)]));
console.log(everyLang);

/*------------------------------------------------*/
console.log("/*------------------------------------------------*/");
// some
var someLang = filteredLang.some(ele => console.log(ele[Object.keys(ele)]));
console.log(someLang);
/*------------------------------------------------*/
/*------------------------------------------------*/
