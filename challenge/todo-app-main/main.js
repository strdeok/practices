function turn_darkmode() {
  document.querySelector("main").style.backgroundColor = "rgb(0,0,0)";
  document.querySelector("body").style.backgroundColor = "rgb(0,0,0)";
  document.querySelector("#add").style.backgroundColor = "hsl(235, 24%, 19%)";
  const inputElements = document.getElementsByTagName("input");
  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].style.backgroundColor = "hsl(235, 24%, 19%)";
    inputElements[i].style.color = "hsl(234, 39%, 85%)"
  };
  document.querySelector("#todo_list").style.backgroundColor =
    "hsl(235, 24%, 19%)";
    const addsElements = document.getElementsByClassName("adds");
    for (let i = 0; i < addsElements.length; i++) {
      addsElements[i].style.backgroundColor = "hsl(235, 24%, 19%)";
    }
  document.querySelector("#middle_bar").style.backgroundColor =
    "hsl(235, 24%, 19%)";
  document.querySelector("#bottom").style.backgroundColor =
    "hsl(235, 24%, 19%)";
  document.querySelector("#middle_bar").style.boxShadow = "none";
  document.querySelector("#bottom").style.boxShadow = "none";
  document.querySelector(".dark_mode").style.display = "none";
  document.querySelector(".light_mode").style.display = "block";
  document.querySelector("#todo_list").style.borderBottom =
    "solid 1px hsl(234, 39%, 85%)";
  if (window.innerWidth >= 1440) {
    document.querySelector(".images:nth-child(4)").style.display = "none";
    document.querySelector(".images:nth-child(3)").style.display = "block";
    document.querySelector(".images:nth-child(1)").style.display = "none";
    document.querySelector(".images:nth-child(2)").style.display = "none";
  } else {
    document.querySelector(".images:nth-child(1)").style.display = "none";
    document.querySelector(".images:nth-child(2)").style.display = "block";
    document.querySelector(".images:nth-child(4)").style.display = "none";
    document.querySelector(".images:nth-child(3)").style.display = "none";
  }
}

function turn_lightmode() {
  document.querySelector("main").style.backgroundColor = "hsl(0,0%,100%)";
  document.querySelector("body").style.backgroundColor = "hsl(0,0%,100%)";
  document.querySelector("#add").style.backgroundColor = "hsl(0,0%,100%)";
  document.querySelector("input").style.backgroundColor = "hsl(0,0%,100%)";
  document.querySelector("#todo_list").style.backgroundColor = "hsl(0,0%,100%)";
  const inputElements = document.getElementsByTagName("input");
  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].style.backgroundColor = "rgb(255, 255, 255)";
    inputElements[i].style.color = "rgb(0,0,0)"
  };
  const addsElements = document.getElementsByClassName("adds");
  for (let i = 0; i < addsElements.length; i++) {
    addsElements[i].style.backgroundColor = "rgb(255, 255, 255)";
  }
  document.querySelector("#middle_bar").style.backgroundColor =
    "hsl(0,0%,100%)";
  document.querySelector("#bottom").style.backgroundColor = "hsl(0,0%,100%)";
  document.querySelector("#middle_bar").style.boxShadow =
    "0px 30px 40px hsl(234, 39%, 85%)";
  document.querySelector("#bottom").style.boxShadow =
    "0px 30px 100px hsl(234, 39%, 85%)";
  document.querySelector(".dark_mode").style.display = "block";
  document.querySelector(".light_mode").style.display = "none";
  document.querySelector("#todo_list").style.borderBottom =
    "solid 1px hsl(237, 14%, 26%)";
  if (window.innerWidth >= 1440) {
    document.querySelector(".images:nth-child(2)").style.display = "none";
    document.querySelector(".images:nth-child(1)").style.display = "none";
    document.querySelector(".images:nth-child(4)").style.display = "block";
    document.querySelector(".images:nth-child(3)").style.display = "none";
    document.querySelector("#bottom").style.boxShadow = "none";
  } else {
    document.querySelector(".images:nth-child(2)").style.display = "none";
    document.querySelector(".images:nth-child(1)").style.display = "block";
    document.querySelector(".images:nth-child(4)").style.display = "none";
    document.querySelector(".images:nth-child(3)").style.display = "none";
  }
}
// 여기까지 darkmode

const new_todo = document.querySelector("#add");
const todoList = document.querySelector("#todo_list");

new_todo.addEventListener("dragstart", dragStart);
todoList.addEventListener("dragenter", dragEnter);
todoList.addEventListener("dragover", dragOver);
todoList.addEventListener("dragleave", dragLeave);
todoList.addEventListener("drop", drop);

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

function dragEnter(e) {
  todoList.classList.add("drag_over");
}

function dragOver(e) {
  e.preventDefault(); // 기본 동작 차단
  todoList.classList.add("drag_over");
}

function dragLeave(e) {
  todoList.classList.remove("drag_over");
}

function drop(e) {
  e.preventDefault(); // 기본 동작 차단
  todoList.classList.remove("drag_over");
  var data = e.dataTransfer.getData("text/plain");
  var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.className = "adds";
  todoList.appendChild(nodeCopy);
  todoList.style.height = todoList.scrollHeight + "px";
}
// 여기까지 drag and copy
// drag and drop을 구현해야 됨
// 추가된 todo들이 단순 문자열로 바뀌어야됨
// 오른쪽 끝에 삭제할 수 있는 버튼 추가
function check() {
  this.classList.toggle("complete");
}
// check 할 때 font style에 줄

// 몇개의 아이템이 남았는지

// 완료된걸 지우기

// all, active, completed를 다 볼 수 있는걸 볼 수 있게

// GG. 담에 더 성장해서 풀어봐야겠다