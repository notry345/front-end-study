// 함수 선언
function helloFunc() {
  // 실행 코드
  console.log(1234);
}
// 함수 호출하여 실행
helloFunc();


// 반환값이 있는 함수
function returnFunc() {
  return 456;
}
let c = returnFunc();
console.log(c);


// 매개변수 a와 b를 갖는 함수
// 데이터를 받아주는 매개체가 되는 매개변수(parameter)..
// 매개변수가 받아주는 데이터를 인수(argument)라고..
function sum(a,b) {
  // 매개변수를 통해 인수를 받아서 처리 후 반환
  return a+b;
}
// 재사용 쌉가능
let d = sum(1,2); // 1과 2는 인수
let e = sum(7,12);
let f = sum(13,11);
console.log(d,e,f);


// 기명(이름이 있는) 함수
// "함수를 선언하다"
function hello() {
  console.log('Hello~');
}
// 익명(이름이 없는) 함수
// 데이터로 활용되거나 변수에 할당되어 사용하기도
// 이름이 없어서 호출할 수 없으니까 어떤 변수에다 할당
// "함수를 표현하다"
let world = function () {
  console.log('World~');
}

hello();
world();


// 객체 데이터
const notry = {
  name: 'what is method?',
  age: 25,
  // 메소드(method)
  // 객체 데이터의 특정한 속성에 함수를 데이터처럼 삽입한 것
  // 익명 함수를 하나의 데이터처럼 활용
  getName: function () {
    return this.name;
  }
};
// notry 안에 있는 하나의 익명 함수를 호출하여 실행
const herName = notry.getName();
console.log(herName);
// or
console.log(notry.getName());