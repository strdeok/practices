// btnclick 함수 정의
function btnclick(button) {
  // 버튼 다음 요소를 가져온다
  var next = button.nextElementSibling;

  // 모든 answers들을 가져온다
  var answers = document.getElementsByClassName("answers");

  // 모든 answers에 대해서 반복문을 실행한다
  for (let i = 0; i < answers.length; i++) {
    // 만약 answers가 next와 다르다면,
    if (answers[i] != next) {
      // answers의 "answers_active" 클래스를 제거한다
      answers[i].classList.remove("answers_active");
    }
  }

  // 버튼 다음 요소(answers)의 "answers_active" 클래스를 토글한다. (반복문이 없으면 계속 열리게 됨)
  next.classList.toggle("answers_active");

  // 클릭된 버튼의 arrow 클래스를 찾아 가져온다
  var arrow = button.querySelector(".arrow");

  // 현재 페이지에 arrow를 가진 모든 클래스를 가져온다
  var arrows = document.querySelectorAll(".arrow");

  // 반복문을 실행하면서, 현재 클릭된 버튼의 상위 요소(parentNode)가
  // 아닌 arrow 요소들은 rotate 클래스를 제거한다.
  for (let j = 0; j < arrows.length; j++) {
    if (arrows[j].parentNode !== button) {
      arrows[j].classList.remove("rotate");
    }
  }

  arrow.classList.toggle("rotate");

  // 모든 버튼 요소를 가져와 buttons 변수에 저장한다
  var buttons = document.querySelectorAll(".qq"); 
  
  for (let k = 0; k < buttons.length; k++) {
    // buttons 배열의 모든 요소를 반복한다
    if (buttons[k] !== button) {
      // 만약 현재 반복중인 요소가 클릭한 버튼(button)과 같지 않다면,
      buttons[k].classList.remove("button_active"); // 해당 요소의 "button_active" 클래스를 제거한다
    }
  }

   // 클릭한 버튼(button)에 "button_active" 클래스를 토글한다
  button.classList.toggle("button_active");
}
