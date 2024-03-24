// document도 하나의 요소(html 자체)임
const searchEl = document.querySelector(".search");
// 위에서 찾아놓은 searchEl 안에서 input 요소를 찾겠다는 의미
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  // 익명함수의 Logic..
  searchInputEl.focus();
});

// searchInputEl이 포커스가 되면 핸들러 함수 실행
// focus가 됐을 때만 클래스가 추가되는 개념
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  // html 속성을 지정
  // placeholder는 input 요소에 입력할 데이터에 대한 힌트
  searchInputEl.setAttribute("placeholder", "통합검색");
});
// 위와 비슷하게 블러 처리
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});
