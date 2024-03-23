// String(문자 데이터)
// 따옴표를 사용합니다.
let myName = "NOTRY";
let email = "notry345@naver.com";
let hello = `Hello ${myName}?!`; //보관법 using 백틱=그레이브 기호(`)

console.log(myName);
console.log(email);
console.log(hello);

// Number(숫자 데이터)
// 정수 및 부동소수점 숫자를 나타냅니다.
let number = 123;
let opacity = 1.57;

console.log(number);
console.log(opacity);

// Boolean(불린 데이터)
// true, false 두 가지 값밖에 없는 논리 데이터입니다.
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

// Undefined
// 값이 할당되지 않은 상태를 나타냅니다.
let undef; // 값이 없는 상태를 JS에서는 Undefined라는 하나의 데이터로 인식
let obj = { abc: 123 }; // 객체 데이터

console.log(undef); // undefined
console.log(obj.abc); // 123
console.log(obj.xyz); // undefined

// NULL
// 어떤 값이 의도적으로 비어있음을 의미합니다.
// 의도적으로 값이 없는 상태를 명시한다는 점에서 Undefined와의 차이점
// 의도적으로 null이라는 값을 넣은 것.
let empty = null;

console.log(empty);

// Object(객체 데이터)
// 여러 데이터를 Key:Value 형태로 저장합니다. { } 안에
let user = {
//Key: Value 
  name: "NOTRY",
  age: 23,
  isValid: true,
};

console.log(user.name);
console.log(user.age);
console.log(user.isValid);

// Array(배열 데이터)
// 여러 데이터를 순차적으로 저장합니다. [ ] 안에
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);