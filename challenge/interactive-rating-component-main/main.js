const buttons = document.getElementsByClassName("ratings");
var rate = document.getElementById("selected");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("change");
    }
    this.classList.add("change");
    selectedValue = this.textContent
    rate.innerHTML = "you selected " + selectedValue + " out of 5";
  });
}

function submit() {
    var before = document.getElementById("before_rate");
    var after = document.getElementById("after_rate");

    before.style.display = "none"
    after.style.display = "block"
}