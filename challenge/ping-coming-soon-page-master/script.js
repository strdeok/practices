function checkInput() {
  var input = document.getElementById("email").value;
  var error_mob = document.getElementById("error_mob");
  var error_des = document.getElementById("error_des");

  if (input === "example@email.com") {
      if (innerWidth <= 750) {
      alert("You entered!");
      error_mob.style.display = "none";
      document.getElementById("email").classList.remove("error");
    } else {
      error_des.style.display = "none";
      document.getElementById("email").classList.rempve("error");
    }
  }
   else {
       if (innerWidth <= 750) {
       error_mob.style.display = "block";
      document.getElementById("email").classList.add("error");
    } else {
      error_des.style.display = "flex";
      document.getElementById("email").classList.add("error");
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("button").click();
  }
});
