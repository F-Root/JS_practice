function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function () {
  return this.first + this.second;
};

function PersonPlus(name, first, second, third) {
  // 중복발생
  // this.name = name;
  // this.first = first;
  // this.second = second;

  //Person생성자 함수의 this가 참조할 객체는 PersonPlus이다.
  //PersonPlus 내부에서 호출했으므로 this라고 전달해줘야 한다.
  //두번째 매개변수부터는 Person 생성자 함수의 인자값에 해당하는 매개변수들이다.
  Person.call(this, name, first, second); //class의 super와 같은 역할을 한다. - inheritance.js 참조
  this.third = third;
}
// PersonPlus.prototype.__proto__ = Person.prototype;
PersonPlus.prototype = Object.create(Person.prototype);

PersonPlus.prototype.avg = function () {
  return (this.first + this.second + this.third) / 3;
};

var kim = new PersonPlus('kim', 10, 20, 30);
console.log(kim.sum());
console.log(kim.avg());
