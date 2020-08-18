// jshint esversion:6
// Currying in JavaScript

function x(a) {
  return b => {
    return c => {
      return a * b * c;
    };
  };
}

var result = x(4)(4)(4);
console.log(result);

/*



*/