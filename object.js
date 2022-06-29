/* this => ('나는', '저는' 과 같은 역할) */
var kim = {
  name: 'kim',
  first: 10,
  second: 20,
  // sum: function (f, s) {
  //   return f + s; => 동작O but 이미 객체 내에 명시되어있는 property를 매개변수로 넣어주어야 하는 번거로움이 있음.
  // },
  // sum: function() {
  //   return first + second; => 동작X undefined가 뜸
  // }
  // sum: function () {
  //   return kim.first + kim.second; => 동작O but 유연하지가 않음. 객체 이름을 k라고 바꾸면 kim.first는 없는 데이터가 됨. k.first로 바꿔야함.
  // },
  sum: function () {
    return this.first + this.second;
  },
};

// console.log(kim.sum(kim.first, kim.second));
console.log(kim.sum());

/* constructor (object factory) -생성자- */
var lee = {
  name: 'lee',
  first: 10,
  second: 10,
  sum: function () {
    return this.first + this.second;
  },
};

console.log(lee.sum());

//example of object factory (Date obj)
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
  console.log('constructor'); // new 연산자를 통해 객체 인스턴스가 생성될때 호출됨.
}

//새로운 객체 생성
//함수 호출 앞에 new 키워드를 사용하면 그 함수는 '생성자 함수'라고 불리며 결과로 객체가 생성됨.
var kim = new Person('kim', 10, 20); // console.log('constructor'); 출력
var lee = new Person('lee', 10, 10); // console.log('constructor'); 출력
console.log(kim);
console.log(kim.sum());
console.log(lee.sum());

//Math는 객체
console.log(Math);

//생성자는 함수로 출력
console.log(Person);
console.log(Date);

//일반 함수는 생성자 함수와 똑같이 함수로 출력
function test() {
  return 'hello';
}
console.log(test);

//생성자 함수와 일반 함수 테스트
function normalTest() {
  this.test = 'normal';
  console.log('normal function'); // new 연산자를 통해 객체 인스턴스가 생성될때 호출됨.
  return 'normal';
}

console.log('함수 normalTest : ', normalTest); // normalTest의 type과 console.log 출력 (괄호를 사용하지 않아도 생성자 함수가 호출된다고 한다. => https://ko.javascript.info/constructor-new 참고 (괄호를 생략해도 된다고 정의되어있다고 함))
console.log('호출했을때 : ', normalTest()); //리턴 String인 'normal'가 출력이 되긴함.
var normal = new normalTest();
console.log('객체 인스턴스 : ', normal); // 객체 출력 (this.test = 'normal' 가 없으면 빈 객체가 출력됨.)

function constructorTest() {
  console.log('constructor function'); // new 연산자를 통해 객체 인스턴스가 생성될때 호출됨.
  this.test = 'constructor';
}

console.log(constructorTest);
var constructor = new constructorTest();
console.log(constructor); // 객체 출력
