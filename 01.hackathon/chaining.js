// jshint esversion:6
// Chaining in Javascript

// Expected Output using Chaning methods in a Object
// Hello World
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
    this.add("World");
    console.log(this.str);
  }
};

helloWorld
  .a()
  .b()
  .c();

/*
Chaining in JavaScript is a Programming methodology
where a sequence of methods/functions attached to
and Object is called repeatedly.

This is possible by returning 'this' keyword.
'this' points to the Object wrapping the methods.
Each method performs a task and returns back a
reference to the Object in which its held. 
The next function is invoked using the returned
Object and so on... 

*/
