var interval;
var timer;

// 30분 타이머 시작 버튼을 누르면 실행되는 함수
function setAlarm() {
  // 30분(1800초)을 초 단위로 설정합니다.
  var timer = 1800;
  var minutes;
  var seconds;
  clearInterval(interval);

  // setInterval 함수를 사용하여 1초마다 타이머를 업데이트합니다.
  interval = setInterval(function () {
    // 분과 초를 계산합니다.
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    // 분과 초가 한 자리 수인 경우 앞에 0을 추가하여 두 자리로 만듭니다.
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // 조건 ? A : B ; (조건이 true이면 A가 반환되고 false면 B가 반환됩니다.)
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // 남은 시간을 출력합니다.
    document.getElementById("timer").innerHTML = minutes + ":" + seconds;

    // 타이머가 종료되면 clearInterval 함수를 사용하여 interval을 정지합니다.
    if (--timer < 0) {
      clearInterval(interval);
      document.getElementById("timer").innerHTML =
        "타이머가 종료되었습니다. 1분후에 다시 동작됩니다.";
      setTimeout(setAlarm, 60000);
    }
  }, 1000);
}

function stopalarm() {
  clearInterval(interval);
  document.getElementById("timer").innerHTML = "타이머가 종료되었습니다.";
}
