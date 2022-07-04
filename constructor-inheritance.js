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
  Person.call(this, name, first, second); //class의 super와 같은 역할을 한다. - class_inheritance.js 참조
  //근데 이렇게만 작성해두면 prototype 내에 선언되어있는 sum메소드를 상속받을 수 없다.
  //그래서 prototype을 상속받기전에 아래에 있는 kim.sum()을 미리 호출해보면 에러가 발생한다.

  this.third = third;
}

PersonPlus.prototype.avg = function () {
  return (this.first + this.second + this.third) / 3;
};

console.log(PersonPlus.prototype); //원래 PersonPlus.prototype은 Person 생성자 함수를 가리키고 있지 않는다. 하지만 sum()메소드 사용을 위해 상속이 불가피하다.

// 메소드를 상속받기 위한 방법이다. 원형(prototype)은 모두 __proto__속성을 갖고있고, 이는 원형(prototype)또한 객체이기 때문이다. 객체 인스턴스가 __proto__속성을 통해 원형(prototype)을 참조(레퍼런싱)하듯이 원형(prototype)또한 __proto__속성으로 다른 원형(prototype)을 참조(레퍼런싱)한다.
// 원형(property)의 __proto__는 기본적으로 항상 Object 객체를 prototype으로 가리킨다. Object 객체의 __proto__는 null이다. 최상위 객체이기 때문에 참조할게 없다.
PersonPlus.prototype.__proto__ = Person.prototype;

//대입연산 후 실행을 해보면 kim.sum()이 잘 출력된다.
//하단의 kim.constructor를 출력해보면 PersonPlus가 객체인스턴스 kim의 생성자 함수인 것도 잘 출력됨을 알 수 있다.
// 브라우저로 테스트해보기
console.log(PersonPlus.prototype);
console.log(new PersonPlus());

//__proto__를 사용하는 방법외에 Object.create()를 사용해도 된다.
//사실 __proto__는 범용적이지만 비표준이기 때문에 Object.create()사용이 권장되긴한다. 하지만 불편하다. 이유는 아래코드를 확인해보면 알 수 있다.

console.log(Object.create(Person.prototype));

//이 방법은 새로운 객체를 하나 생성해서 PersonPlus.prototype에 할당하는 방식이다.
//하지만 기존 PersonPlus.prototype 내에 있는 객체의 내용이 모두 덮어씌워져 없어진다는 단점이 있다. (constructor()와 avg() 메소드가 없어짐.)
PersonPlus.prototype = Object.create(Person.prototype);

//그렇기 때문에 constructor()와 avg()메소드를 다시 선언해줘야한다.
PersonPlus.prototype.constructor = PersonPlus;
PersonPlus.prototype.avg = function () {
  return (this.first + this.second + this.third) / 3;
};
//불편하다... 그래서 그냥 상속을 사용할때는 class를 사용하는 것이 소스도 깔끔해서 직관적이고 편한 방법이라 할 수 있다.
//하지만 class 내부적으로는 이런 코드들이 동작된다는 것을 알아두면 좋다.

// 브라우저로 테스트해보기
console.log(PersonPlus.prototype);
console.log(new PersonPlus());

var kim = new PersonPlus('kim', 10, 20, 30);
console.log(kim.sum());
console.log(kim.avg());
console.log(kim.constructor);
