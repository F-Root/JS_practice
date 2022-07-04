/* prototype과 constructor는 서로를 상호참조하는 관계이다. */
/* Person 생성자 함수 (constructor) <------ 상호참조관계 ------> Person의 원형 객체 (prototype) */

function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function () {
  return this.first + this.second;
};

var kim = new Person();

//브라우저에서 실험해보기
console.log('-- 생성자 함수(constructor) 출력 --\n', Person);
console.log('-- 생성자 함수(constructor) 출력 --\n', Person.prototype.constructor);
console.log('-- 생성자 함수(constructor) 출력 --\n', kim.constructor); // kim 내에 선언되어있는게 없으므로 prototype을 참조하여 constructor를 불러오는 구조이다.
console.log('-- 원형 객체(prototype)출력 --\n', Person.prototype);
console.log('-- 원형 객체(prototype)출력 --\n', Person.prototype.constructor.prototype);

var date = new Date();
console.log('-- Date의 constructor와 Date 생성자 함수의 관계 --\n', Date.prototype.constructor === Date);
console.log('-- Date 생성자 함수(constructor) 출력 --\n', date.constructor); // date 내에 선언되어있는게 없으므로 prototype을 참조하여 constructor를 불러오는 구조이다.
console.log('-- Date 생성자 함수(constructor) 출력 --\n', Date);
//아래 두 코드는 같다.
var date2 = new date.constructor();
var date3 = new Date();
console.log(`var date2 = new date.constructor();\n\n`, date2);
console.log(`var date3 = new Date();\n\n`, date3);
