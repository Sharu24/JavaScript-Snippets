// jshint esversion:6

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
