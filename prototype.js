/* prototype */
// JavaScript = prototype based language
// JavaScript의 객체 지향 프로그래밍을 위한 문법

// 아래와 같이 생성자 함수 내에 메소드를 선언하는 것은 선호되지 않는 방법이다.
// 아래와 같이 메소드가 포함되어있을 경우
// new Person() 식으로 객체 인스턴스(설계도를 바탕으로 제작한 부품들)을 생성하면
// 메소드의 로직이 복잡하고 선언된 횟수가 많을수록 메모리 낭비가 심해진다.
// 프로퍼티의 경우에는 객체 인스턴스마다 각자 다른 value를 할당해주기 때문에 객체의 생성자 함수 내에 직접 선언하는게 맞다 치지만
// 메소드의 경우에는 거의 대부분 공통적인 로직이다. 즉, 인스턴스마다 다르게 동작하는 메소드를 선언할 일이 없다. (그런 경우에는 생성자 함수 선언 후 따로 직접 만들어준다. 아래의 kim.sum과 같이)
// 그렇기 때문에 공통적으로 사용되는 메소드를 prototype으로 선언해주는 것이다.

// 말로는 이해하기 어려울 것 같은데 최대한 풀어서 설명해보겠다.

// 생성자 함수에 메소드를 선언해서 new Person()식으로 인스턴스화 시켜서 사용할 경우,
// new Person()이 호출되어 객체 인스턴스가 생성된 횟수만큼 메소드도 생성된다.
// 즉, 같은 동작을 하는 메소드가 여러개 생성된다. 심지어 같은 내용의 코드이다. 중복이라고 할 수 있다.
// 그렇기 때문에 메모리가 낭비된다고 할 수 있을 것이다. 중복은 퍼포먼스 측면으로 생각하면 성능저하를 일으키는 원인.

// 위와 같은 이유로 인해 prototype에 메소드를 선언한다.
// 아래와 같이 Person.prototype.sum 으로 메소드를 선언하면
// new Person()을 10번, 100번 호출하든 sum() 메소드는 단 1개만 존재한다. 어디에? Person의 prototype 내에.
// prototype을 직역하면 '원형'또는 '원본'이라 할 수 있다.
// 그리고 직접 생성한 생성자 함수로 객체를 생성하면 해당 객체는 원본인 prototype을 상속받는다는 것을 알 수 있다.
// prototype내에 메소드를 선언하면 객체가 생성될때마다 메소드가 생성되는 것이 아닌, 단 한번만 생성된 것이므로
// 중복으로 인한 메모리의 낭비를 없앨 수 있다.

// 틀렸을 수도 있으니 더 공부를 해야겠다.
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
