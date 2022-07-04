/* call */

var kim = { name: 'kim', first: 10, second: 20 };
var lee = { name: 'lee', first: 10, second: 10 };
// lee.__proto__ = kim;

function sum(prefix) {
  return prefix + (this.first + this.second);
}
//sum(); 와 같다.
sum.call();

//this를 kim으로 지정
sum.call(kim);

//call
console.log(sum.call);
//call의
//첫번째 인자로는 sum메소드(해당 함수)의 this가 참조할 객체
//두번째 인자부터는 sum 메소드의 인자값에 해당하는 매개변수
console.log(sum.call(kim, '=> '));
console.log(sum.call(lee, ': '));

/* bind */
// call은 호출시마다 this가 참조할 객체를 변경할 수 있지만
// bind는 호출시 this가 참조할 객체를 '고정'시킨다.
// 그리고 그 것을 바탕으로한 새로운 함수를 리턴한다.
var kimSum = sum.bind(kim, '-> ');
console.log(kimSum());

//bind
console.log(sum.bind);

//call과 bind의 차이
//call은 메소드를 실행시킨다. 하지만
//bind는 bound이름으로 새로운 함수를 만들어서 반환한다.
//bind를 사용하려면 bound함수를 받을 새로운 변수를 선언해서 그 것을 호출해야한다.
console.log(sum.call(kim, '=> '));
console.log(sum.bind(kim, '-> '));
