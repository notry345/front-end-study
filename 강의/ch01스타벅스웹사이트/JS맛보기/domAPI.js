// < DOM API의 이해 >

// HTML 요소 찾는 메소드 querySelector();
let boxEl = document.querySelector(".box"); // 오늘의 실험체이다
console.log(boxEl);

/* 
HTML 요소에 적용할 수 있는 메소드 addEventListener();
인수를 추가 가능
1 (첫번째 인수) - 이벤트(event, 상황)
2 (두번째 인수) - 핸들러(handler, 실행할 함수)
*/

// HTML 요소의 클래스 정보 객체 활용!
boxEl.classList.add("active"); // 요소에서 active라는 클래스 추가
let isContains = boxEl.classList.contains("active"); // active라는 클래스가 추가되어져 있니?
console.log(isContains); // true

boxEl.classList.remove("active"); // 요소에서 active라는 클래스 삭제
isContains = boxEl.classList.contains("active");
console.log(isContains); // false

boxEl.addEventListener("click", function () {
  console.log("Click!!");
  boxEl.classList.add("active2");
  console.log(boxEl.classList.contains("active"));
  console.log(boxEl.classList.contains("active2"));
  boxEl.classList.remove('active2');
  console.log(
    boxEl.classList.contains('active2')
  );
});


// box 클래스 갖고 있는 HTML 요소 모두 찾기 -> 찾은 요소들의 배열로
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// forEach라는 메소드로 찾은 요소들 반복해서 배열 제어
// forEach 내부에 익명 함수를 인수로 추가
// boxEls.forEach(function () {});
// 첫 번째 매개변수: 반복 중인 요소
// 두 번째 매개변수: 반복 중인 번호

// boxEl는 반복 중인 요소, index는 번호
boxEls.forEach(function(boxEl, index) {
  boxEl.classList.add(`order-${index+1}`);
  console.log(index, boxEl);
});



const box = document.querySelector('.fox');

// 요소에 붙일 수 잇는 textContent라는 DOM API

// Getter, 값을 얻는 용도
console.log(box.textContent);

// Setter, 값을 지정하는 용도
box.textContent = 'NOTRY?!';
console.log(box.textContent);

const foxy = document.querySelector('.box');
console.log(foxy.textContent);
foxy.textContent = 'Changed';
console.log(fox.textContent);