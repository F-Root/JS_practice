/* 함수 선언방식 */
function Person() {} // 이때 이 중괄호는 객체의 {} -> 객체 리터럴 표현식 이다.
//if나 for문의 {}은 statement라고 함. 함수는 이들과 다름.
//위 아래는 서로 같다.
var Person = new Function();
//즉 JS의 함수는 객체다. 그렇기에 property를 가질 수 있다.

/* prototype과 __proto__의 차이 (브라우저에서 확인해볼 것) */
function makePerson(name, age) {
  this.name = name;
  this.age = age;
}

makePerson.prototype.who = () => {
  return `I'm ${this.name} and ${this.age}years old`;
};

console.log(makePerson);
console.log(makePerson.prototype); //생성자 함수의 prototype 출력
console.log(makePerson.prototype.constructor); //makePerson 생성자 함수를 가리킴
console.log(makePerson.__proto__); //어떤 함수가 출력됨
console.log(new makePerson('han', 30)); //객체 인스턴스와 같은 출력값

var kim = new makePerson('kim', 23);

console.log(kim); //객체 인스턴스 출력
console.log(kim.prototype); //출력결과 없음
console.log(kim.__proto__); //makePerson 생성자 함수의 prototype이 출력됨
console.log(kim.__proto__.constructor); //makePerson 생성자 함수를 가리킴

//생성자 함수의 prototype 속성과
//객체 인스턴스의 __proto__ 속성이
//결과값이 같다.

//그리고 prototype.constructor와 __proto__.constructor의 출력결과는 같고
//이는 prototype에서 constructor라는 property가 생성자 함수를 가리킨다는 것을 알 수 있다.

//결론적으로 말하면
//생성자 함수의 prototype 속성은 해당 생성자의 원형(prototype)을 가리키고(참조한다 - [reference]) - 생성자 함수 : prototype => prototype
//객체 인스턴스의 __proto__ 속성은 자신을 만든 생성자 함수의 원형(prototype)을 가리킨다(참조한다 - [reference]) - 객체 인스턴스 : __proto__ => prototype
//객체의 원형 즉, prototype은 constructor라는 property로 생성자 함수를 가리킨다(참조한다 - [reference]) - prototype : constructor => 생성자 함수

//고로 prototype과 __proto__는 모두 객체의 원형을 참조하기 위한 속성이지만
//prototype은 생성자 함수에서 사용할 수 있는 속성이고
//__proto__는 생성자 함수를 이용해서 만든 객체 인스턴스에서 사용할 수 있는 속성이다.

//그리고 prototype에서는 constructor property로 생성자 함수를 참조한다.
