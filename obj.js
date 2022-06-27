/* this => ('나는', '저는' 과 같은 역할) */
var kim = {
  name: 'kim',
  first: 10,
  second: 20,
  // sum: function (f, s) {
  //   return f + s; => 동작O
  // },
  // sum: function() {
  //   return first + second; => 동작X
  // }
  // sum: function () {
  //   return kim.first + kim.second; => 동작O
  // },
  sum: function () {
    return this.first + this.second;
  },
};

// console.log(kim.sum(kim.first, kim.second));
console.log(kim.sum());

/* constructor (object factory) */
var lee = {
  name: 'lee',
  first: 10,
  second: 10,
  sum: function () {
    return this.first + this.second;
  },
};

console.log(lee.sum());

//example (Date obj)
var date = new Date('2022-06-27');
console.log(date.getFullYear());
console.log(date.getMonth()); //0부터 counting 되기 때문에 1을 더해줘야 한다.
console.log(date.getDate());

console.log('build-in obj : Date', Date);

// function은 object이고, constructor를 만들 수 있다. => this를 사용하는 순간 constructor가 되는 듯 하다.
function Person() {
  this.name = 'kim';
  this.first = 10;
  this.second = 20;
  this.sum = function () {
    return this.first + this.second;
  };
  console.log('hello'); // => this가 있으면 출력되지 않음
}

//생성자 함수(constructor)는 리턴이 없기 때문에 아무것도 출력되지 않는다.
console.log('Person()', Person());

//new keyword를 붙이면 object를 생성하는 constructor(생성자)가 된다.
console.log('new Person()', new Person()); // => 생성자 함수.

//parameter를 받는 생성자 함수 (constructor)
function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.sum = function () {
    return this.first + this.second;
  };
}

//새로운 객체 생성
var kim = new Person('kim', 10, 20);
var lee = new Person('lee', 10, 10);
console.log(kim.sum());
console.log(lee.sum());
