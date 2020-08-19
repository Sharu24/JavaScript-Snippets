// jshint esversion:6
// Chaining in Javascript

/*
Chaining in JavaScript is a Programming methodology
where a sequence of methods/functions is invoked, 
one after the other, by attaching them together 
in the same line.

Each method performs a task and returns back a
reference to the Object in which its held. 
the First Function is invoked and returns
the Object back; The next function in the chain is invoked 
using the returned Object and so on... 
*/

// Expected Output using Chaning methods in a Object
// Hello World

// Approach 1
const helloWorld = {
  str: "",
  add(subs) {
    this.str += subs;
  },
  a() {
    this.add("Hello");
    return this;
  },
  b() {
    this.add(" ");
    return this;
  },
  c() {
    this.add("World 1");
    console.log(this.str);
  }
};


// Approach #1
helloWorld
  .a()
  .b()
  .c();
/*
Returning the Object is achieved by returning 
'this' in every function call. 
'this' points to the Object containing the methods.

chain1 = HelloWorld.a()
  Calls the function add() using Object HelloWorld
  returns 'this' pointing to the current object

  Note - returning this is important for 
  subsequent functions to get invoked

chain2 = chain1.b()
  Calls the function add() using Object returned from HelloWorld.a()
  returns 'this' pointing to the current object

chain2.c()
  Calls the function add() using Object returned from HelloWorld.b()
  returns 'this' pointing to the current object
*/

// Approach 2
// In this approach, Every Function returns back an Object 
// reference containing the reference of another function

function x() {
  return {
    y: function() {
      return {
        z: function() {
          console.log("Hello World 2");
        }
      };
    }
  };
}

// Approach #2
x()
  .y()
  .z();

