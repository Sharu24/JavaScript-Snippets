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

Currying is programming style where 
A function with multiple arguments is
evaluated by nesting functions until
all the arguments are exhausted.

Steps
1. Function returns a new function 
2. The new function consumes an Argument
3. Repeats the Process till the last argument

Currying utilizes 
1. JS closure paradigm where each function 
    has access to its outer environment variable.
2. A function returning another function

Usage 
1. log(date, method, message);
    ._currying -> log(date)(method)(message)
    now we can execut log(date) separately
    today = log(Date.now());
    today('DEBUG','message1')
    today('DEBUG','message2')
2. As we can see above, we can fetch the date 
    and have a boilerplate ready for invoking
    next set of Debug statements for today.


*/
