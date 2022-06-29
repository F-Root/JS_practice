/* prototype */
// JavaScript = prototype based language

function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
  // this.sum = function () {
  //   return this.first + this.second;
  // };
}

Person.prototype.sum = function () {
  return 'prototype : ' + (this.first + this.second);
};

var kim = new Person('kim', 10, 20);
kim.sum = function () {
  return 'this : ' + (this.first + this.second);
};
var lee = new Person('lee', 10, 10);
console.log(kim.sum());
console.log(lee.sum());
