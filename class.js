/* class */
// constructor function의 대체재 => es6에서 추가.

class Person {
  // class 내에서는 함수를 선언할때 function키워드를 붙이지 않음.(규칙)
  // 그리고 생성자 함수를 선언할때는 무조건 constructor를 붙여야함.(규칙)
  // 그 외 구현방식은 constructor function(생성자 함수)과 비슷한다.
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log('constructor'); // constructor 함수와 똑같이 new 연산자를 통해 객체 인스턴스가 생성될때 호출됨.
  }
}

var kim = new Person('kim', 10, 20); // console.log('constructor'); 출력

console.log(Person);
console.log(kim);
// kim.sum = function () {
//   return 'this : ' + (this.first + this.second);
// };
// var lee = new Person('lee', 10, 10);
// console.log(kim.sum());
// console.log(lee.sum());
