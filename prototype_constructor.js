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

//브라우저에서 실험해보기
console.log('-- 생성자 함수(constructor) 출력 --\n', Person);
console.log('-- 생성자 함수(constructor) 출력 --\n', Person.prototype.constructor);
console.log('-- 원형 객체(prototype)출력 --\n', Person.prototype);
console.log('-- 원형 객체(prototype)출력 --\n', Person.prototype.constructor.prototype);
