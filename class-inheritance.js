/* inheritance */
// 상속

class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }

  sum() {
    return this.first + this.second;
  }

  // 만약에 평균을 구하는 기능이 필요하다면 아래와 같이 메소드를 추가하는 식으로 해결할 수 있다.
  // 하지만 아래와 같은 방식으로 해결하는 것이 문제가 되는 경우도 있다.
  // 1. 외부에서 가져온 라이브러리 소스 내에 있는 객체 class를 아래와 같이 직접적으로 수정하는 경우가 있다면, 만약 라이브러리가 업데이트되면 수정한 소스가 덮어씌워질 가능성이 높다. 혹은 라이브러리가 업데이트 되지 않을 가능성도 있다.
  // 2. 기존의 객체 class가 범용적으로 사용되는 상황이고, 추가된 메소드의 기능이 몇군데 빼고 거의 사용되지 않는다면, 객체 class 내에 직접적으로 메소드를 추가하는 것은 비용적인 측면에서 비효율적일 수 있다. 최대한 중복을 줄이고 함수와 객체를 경량화 하여 재사용을 많이 하는 것이 바람직한 방법이다.

  // 위 같은 이유때문에 직접 클래스 내에 메소드를 추가하는 것보다
  // '상속'을 이용하여 필요한 곳에서만 기능을 추가하여 사용할 수 있도록 하는 것이 바람직하다.

  // avg() {
  //   return (this.first + this.second) / 2;
  // }
}

// 객체 PersonPlus는 객체 Person을 상속받는다.
// 상속 keyword는 extends(확장) => class PersonPlus를 class Person으로 확장(extends)한다.
// 객체 Person은 객체 PersonPlus에게 자신이 가진 요소들(property와 method를) 공유한다.
// 이 관계를 부모자식 관계라고 한다. => class 자식 extends 부모 {}
// 상속을 받으면 부모 객체의 property와 method를 사용할 수 있다.
// 또한 부모 객체에서 어떤 변경이 일어날 경우, 자식 객체에도 자동적으로 반영이 된다.

// 상속의 이점
// 1. 중복 제거 (자식이 부모를 상속받으면 자식 객체에는 부모 객체에 있는 요소를 작성해놓을 필요가 없음.)
// 2. (중복 제거로 인한)코드 경량화
// 3. 유지보수의 편의성 증가 (부모 객체의 요소를 수정하면 이를 상속하는 자식 객체는 따로 수정할 필요 없이 동시다발적으로 수정사항이 반영됨.)
class PersonPlus extends Person {
  avg() {
    return (this.first + this.second) / 2;
  }
}

var kim = new PersonPlus('kim', 10, 20);
console.log(kim.sum());
console.log(kim.avg());

/* super */
// 생성자 함수에 third를 추가하고 싶은 경우
class PersonSuper extends Person {
  // 부모 클래스에 third가 없기 때문에 생성자 함수를 재선언 한다.
  // 하지만 이런식으로 하면 중복이 발생한다.
  // constructor(name, first, second, third) {
  //   this.name = name;
  //   this.first = first;
  //   this.second = second;
  //   this.third = third;
  // }

  // sum() {
  //   return this.first + this.second;
  // }

  // super라는 키워드를 사용하면 이러한 문제를 해결할 수 있다.
  // super는 상속받는 부모 객체를 가리킨다. (this가 객체 자기자신을 가리키듯이)
  constructor(name, first, second, third) {
    //super()라고 작성하면 부모 class의 생성자 함수를 호출한다.
    super(name, first, second);
    this.third = third;
  }

  sum() {
    //super.sum()라고 작성하면 부모 class 내에 선언되어있는 메소드를 호출한다.
    console.log(super.constructor, super.sum); // [class Person] [Function: sum]
    return super.sum() + this.third;
  }
}

var superKim = new PersonSuper('superKim', 5, 5, 5);
console.log(superKim.sum());
