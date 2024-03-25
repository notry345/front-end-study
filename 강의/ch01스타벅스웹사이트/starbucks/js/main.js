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

// 밑으로 스크롤 시 badge 사라지게
const badgeEl = document.querySelector("header .badges");

// window 객체란 프로젝트가 나타나 있는 브라우저의 탭
// 화면이 스크롤되면 익명함수 내용을 수행하겠다.라는 의미
// 이때 무거운 프로젝트에서는 많은 함수를 사용하는 것이 부담스러울 수 있음
// -> 실행되는 함수의 수를 외부에서 가지고 올 수 있는 JS 라이브러리를 통해 제어해줄 것임
window.addEventListener(
  "scroll",
  // 0.3초 단위로 의도적인 부하를 주어 함수가 한꺼번에 우르르 실행되는 것을 방지
  // _.throttle(함수, ms단위의 시간)
  _.throttle(function () {
    console.log(window.scrollY);
    // 사용자가 스크롤시 scrollY 값 갱신됨 -> 위에서부터 몇 픽셀 지점에 위치하고 있는지 확인 가능
    if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap.to(요소, 지속시간(s단위), 옵션(주로 객체데이터));
      // 0.6초 동안 점점점점 투명해지겠다.
      // 시각적으로만 사라지지않게 display에 css 속성 값 none 꼭 추가
      gsap.to(badgeEl, 0.6, {
        // 속성: 옵션,
        opacity: 0,
        display: "none",
      });
    } else {
      // 배지 다시 보여주기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
