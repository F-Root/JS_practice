//array
let memberArray = ['root', 'kim', 'lisine'];

//array call
console.log(memberArray[0]);

//array loop
console.group('array loop');
memberArray.forEach((el, idx) => console.log(idx, el));
console.groupEnd('array loop');

//object
let memberObject = {
  host: 'root',
  job: 'developer',
  skill: 'javascript',
};

//object call
console.log(memberObject['host']);
console.log(memberObject.job);

//add object
memberObject.skill = 'JavaScript';
memberObject.age = 'secret';
console.log(memberObject.skill);
console.log(memberObject.age);

//delete object
delete memberObject.age;
console.log(memberObject.age);

//object loop
console.group('object loop');
for (var key in memberObject) {
  console.log(key, memberObject[key]);
}
console.groupEnd('object loop');

/* built-in Objects */

//Math
console.log(Math.PI);
console.log(Math.random());
console.log(Math.ceil(3.3));
console.log(Math.round(3.4));
console.log(Math.round(3.5));
console.log(Math.floor(3.9));

// user made object (property & method)
var MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};

console.log(MyMath.PI);
console.log(MyMath.random());
console.log(MyMath.floor(3.3));

// user made object is better than these
var MyMath_PI = Math.PI;
function MyMath_random() {
  return Math.random();
}
function MyMath_floor(val) {
  return Math.floor(val);
}
// => 접두어를 붙여 변수를 만들면 변수명, 함수명이 너무 길어지는데 object(객체)는 이를 방지할 수 있다.
