/* class */
// constructor function의 대체재 => es6에서 추가.

// class는 공장 또는 설계도. object(객체)는 물건 또는 사례

class Person {
  // class 내에서는 함수(메소드)를 선언할때 function키워드를 붙이지 않음.(규칙)
  // 그리고 생성자 함수를 선언할때는 무조건 constructor를 붙여야함.(규칙)
  // 그 외 구현방식은 constructor function(생성자 함수)과 비슷한다.
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log('class'); // constructor 함수와 똑같이 new 연산자를 통해 객체 인스턴스가 생성될때 호출됨.
  }

  // JS class내에서 메소드를 선언하는 방식. prototype에 사용하는 것보다 권장됨.
  // class내에서 선언한 메소드는 prototype에 명시되어 있음. (객체 내에 메소드로 할당되는 것이 아닌 애초부터 prototype에 할당됨.)
  sum() {
    return 'in class : ' + (this.first + this.second);
  }

  // avg() {
  //   return (this.first + this.second) / 2;
  // }
}

// class를 사용할때도 prototype에 메소드를 추가할 수 있다. 허나 권장방식은 아님.
Person.prototype.mul = function () {
  return 'prototype : ' + this.first * this.second;
};

var kim = new Person('kim', 10, 20); // console.log('class'); 출력

console.log(Person);
console.log(kim);
console.log(kim.sum());
console.log(kim.mul());

//마찬가지로 중간에 다른방식으로 동작하는 메소드를 선언하고 싶으면 아래와 같이 할 수 있다.
kim.sum = function () {
  return 'this : ' + (this.first + this.second);
};

var lee = new Person('lee', 10, 10); // console.log('class'); 출력

console.log(kim.sum());
console.log(lee.sum());

//JS Class fields(public fields)
class Car {
  static hyundai = 'Avante'; //static으로 선언한 변수는 prototype의 constructor에서 확인할 수 있다. & Car.hyundai 라고 호출 가능하다.
  kia = 'k3'; // 호출되지 않는다. 인스턴스를 생성할때 값을 재할당해주지 않아도 기본값으로 'k3'이 들어가 있는 것을 확인할 수 있다.
  constructor(benz, bmw, audi, kia) {
    this.benz = benz;
    this.bmw = bmw;
    this.audi = audi;
    this.kia; //다른 값들은 new Car()로 호출시 매개변수로 값을 전달해주지 않으면 undefined가 뜨지만 kia는 위에서 미리 선언했으므로 'k3'이라는 값이 호출된다.
  }
}
