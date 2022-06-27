//JS는 웹브라우저에서 사용자와 상호작용을 하기 위해 개발됨
//HTML은 웹브라우저에 한번 출력되면 자기자신을 바꿀 수 없지만 JS를 이용하면 변경이 가능하다.
//JS는 웹페이지를 동적으로 만들어준다.

// -- Data type --
// Primitives : Number, String, Boolean, Null, Undefined, Symbol(es6) => No Reference (원시형)
// Object {key:value}, Array [index(value)], Function => Reference (참조형)

// variable : var, let
// constant : const

// = : 대입연산자 (assignment operators)

// ==, === : 비교연산자 (comparison operators) => return Boolean (true, false)

// Conditional Statements : 조건문
/*
  if(boolean ? true : false)
    ~
  else
    ~
*/
/*
  switch(data type)
    case type1 : ~
    case type2 : ~
    default: ~
*/

// Loop : 반복문
/*
  while(boolean) {

  }

  for() {

  }
*/

// Array : 배열
/*
  var array = ['1','2','3'];

  //array index
  console.log(array[0]); => 1
  console.log(array[1]); => 2
  console.log(array[2]); => 3

  //iterate array
  for(var i=0; i < array.length; i++) {
    ~
  }

  for(var element of array) {
    console.log(element) => 1,2,3
  }

  array.forEach((element, index) => {
    ~
  });
*/

// Function : 함수
/*
  //define function
  function functionName(argument) {
    return ~;
  }

  //call function
  functionName(parameter);

  //function variable
  var functionName = function() {
    ~
  }

  //arrow function
  var functionName = () => {
    ~
  }
*/

// Object : 객체
/*
  var object = {"id":"1352", "name":"root", "age":"secret", "tall":"secret"}

  //object key
  console.log(array.id); => 1352
  console.log(array["name"]); => root <= console.log(array.name);

  //iterate obejct
  for(var key in object) {
    console.log(key) =>; "id", "name", "age", "tall"
    console.log(object[key]); => "1352", "root", "secret", "secret"
  }

  //property & method
  var object = {"id","i'm property", "func":function() {console.log("i'm method")}}

  property => object.id
  method => object.func()
*/

var link = {
  setColor: function (color) {
    //link color setting
    var links = document.querySelectorAll('a');

    links.forEach((el) => (el.style.color = color));
  },
};

var body = {
  setColor: function (color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  },
};

function mainJsNightDayHandler(self) {
  if (self.textContent === 'day') {
    body.setColor('white');
    body.setBackgroundColor('black');
    self.textContent = 'night';

    link.setColor('powderblue');
  } else {
    body.setColor('black');
    body.setBackgroundColor('white');
    self.textContent = 'day';

    link.setColor('blue');
  }
}
