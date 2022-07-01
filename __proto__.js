/* __proto__ */
// what the f**k is this??

// JavaScript는 흔히 prototype based language라고 한다.
// 그 뜻을 보여주는 것이 prototype과 __proto__인 것 같다.

// 개인적인 생각이지만 객체의 prototype을 지정해주는 키워드가 __proto__ 인 것 같다.
// 이유는 소스를 보면 알 수 있다.

// Object 두개
var superObj = { superVal: `I'm super` }; // 부모
var subObj = { subVal: `I'm sub` }; // 자식

console.log(superObj.__proto__);
console.log(subObj.__proto__);

// __proto__를 이용해 subObj를 superObj의 자식으로 만들 수 있다.
// __proto__는 prototype link를 정하는 키워드이다.
// 즉, subObj의 원형(prototype)이 superObj가 된다는 소리다.
subObj.__proto__ = superObj;
console.log(subObj.__proto__);

// 고로 subObj 객체에서 부모객체 superObj 내에 있는 element(property나 method)를 참조할 수 있다.
console.log(subObj.superVal);

// 만약 subObj에서 superVal이라는 property를 생성한다 해도 prototype의 값은 변하지 않는다.
subObj.superVal = `Are U super?`;
console.log(subObj.superVal);
console.log(subObj.__proto__);
console.log(superObj.superVal);

// 하지만 원본에 직접 접근하면??
subObj.__proto__.superVal = `super`;
// 변한다;;
console.log(subObj.__proto__);
console.log(superObj.superVal);
// 이를 통해 알 수 있는 것은
// prototype속성은 원본(Object, constructor, class)을 레퍼런싱(참조)하고 있다는 것이다.
// 왜냐, __proto__로 접근해서 값을 변경하니까 원본에서 참조해도 값이 바뀌어 있는 것을 확인할 수 있기 때문이다.
// 메모리 주소 값을 참조하고있는 형태인 것 같다.

console.log(`---------------------------`);

// 아래와 같이 Person 생성자를 만들고
// 객체 인스턴스를 생성하면
function Person(first, second) {
  this.first = first;
  this.second = second;
}

// 해당 인스턴스의 __proto__는 생성자 함수가 된다.
var kim = new Person(3, 3);
console.log(kim.__proto__); // 브라우저 콘솔로 확인하면 생성자 함수가 출력됨.
console.log(kim.__proto__.constructor);

// 클래스도 마찬가지이다.
class Person2 {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  sum() {
    return this.first + this.second;
  }
}

// 해당 인스턴스의 __proto__는 생성자 함수가 된다.
var lee = new Person2(5, 5);
console.log(lee.__proto__); // 브라우저 콘솔로 확인하면 생성자 함수가 출력됨.
console.log(lee.__proto__.constructor);
console.log(lee.__proto__.sum);

/* 결론, conclusion */
// prototype은 모든 객체의 원형으로 어느 객체에나 존재한다.
// 만약 __proto__가 null인 경우는 최상위 객체인 Object가 prototype이 되는 것 같다.(아닐수도?)
// prototype은 객체의 부모라고 할 수도 있고, 원형이라고 할 수도 있다.
// 만약 해당 객체에서 참조하고 싶은 property나 method가 있는데 객체 인스턴스 내에 없으면
// 그 객체의 원형이자 부모인 prototype에서 참조를 시도한다.
// 있으면 반환해주고 없으면 undefined.

// 다른 언어에서는 상속받는 대상을 변경하는게 있었나? 기억이 잘 안나지만
// JavaScript는 객체 인스턴스 자체에서 __proto__ 속성을 이용해
// 해당 객체의 prototype(원형, 부모)을 변경할 수 있다.
// 신분세탁을 할 수 있다고 보면 될거같다. (출신, 근원지, 숙주 변경 ㅋㅋㅋ)

// 고로 객체의 prototype(원형, 부모)를 변경하려면 __proto__를 사용하면 된다.
// 표준은 아닌데 표준에 가깝고 많이 지원된다고 한다.
// 어떤 문제를 야기하는지는 아직 잘 모르겠다.

/* __proto__의 대체재 */

var superObj = { superVal: `I'm super` }; // 부모
var subObj = { subVal: `I'm sub` }; // 자식

console.log(superObj.__proto__);
console.log(subObj.__proto__);

// 솔직히 __proto__는 발음하기도 어렵고 사용하기가 좀 힘들다.
// 아래와 같이 __proto__를 이용하여 prototype을 정해주는 것은 직관적이지 않다는 단점이 있다.
//subObj.__proto__ = superObj;
//console.log(subObj.__proto__);

// 이럴때 Object.create()라는 메소드를 사용한다.
subObj = Object.create(superObj);
// superObj를 subObj의 prototype으로 정한다 라는 의미.
console.log(subObj.__proto__);

// __proto__를 사용한 것과 동일한 결과를 보여주지는 않는다.
console.log(subObj.superVal); //__proto__를 사용했을때처럼 prototype의 값 참조가 잘 진행된다.
console.log(subObj); //하지만 subObj 객체에 Object.create(superObj)의 반환값을 아예 덮어씌워버린 것이기 때문에 기존에 있던 subObj의 subVal 값은 없어지고 subObj는 빈 객체가 된다.
// 추후에 elements를 추가해줘야한다.
subObj.subVal = `I'm sub`;
console.log(subObj);
// 브라우저 확인용
debugger;

// 그리고 브라우저 개발자도구로
// Source tab의 Watch에서 superObj랑 subObj를 추가하고 확인해보면
// prototype에도 prototype이 존재한다는 것을 알 수 있었다.
// [[Prototype]]과 __proto__ 속성을 쭉 따라가다보면
// 가장 내부에 존재하는 __proto__에는 null값이 할당되어있는 것을 알 수 있다.

// 또한 subObj의 prototype을 superObj로 지정해줬기 때문에
// subObj의 [[Prototype]]과 __proto__ 속성을 확인해보면
// superVal property가 선언되어 있는 것을 확인할 수 있다.
