function email_check(email) {
  var reg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return reg.test(email);
}

function val() {
  var email_input = document.getElementById("email");
  if (email_input.value === ""){
    email_input.classList.remove("error");
    email_input.classList.add("error");
    document.getElementById("emailadd").style.display = "block";
    document.getElementById("wrongemail").style.display ="none";
  }
  else if (!email_check(email_input.value)) {
    email_input.classList.remove("error");
    email_input.classList.add("error");
    document.getElementById("emailadd").style.display = "none";
    document.getElementById("wrongemail").style.display ="block";
  } else {
    email_input.classList.remove("error");
    document.getElementById("emailadd").style.display = "none";
    document.getElementById("wrongemail").style.display ="none";
  }

  var first_input = document.getElementById("firstname");
  if (first_input.value === "") {
    first_input.classList.remove("error");
    first_input.classList.add("error");
    document.getElementById("first").style.display = "block";
  } else {
    first_input.classList.remove("error");
    document.getElementById("first").style.display = "none";
  }

  var last_input = document.getElementById("lastname");
  if (last_input.value === "") {
    last_input.classList.remove("error");
    last_input.classList.add("error");
    document.getElementById("last").style.display = "block";
  } else {
    last_input.classList.remove("error");
    document.getElementById("last").style.display = "none";
  } 

  var pwd_input = document.getElementById("password")
  if (pwd_input.value === "") {
    pwd_input.classList.remove("error")
    pwd_input.classList.add("error")
    document.getElementById("pwd").style.display = "block"
  } else {
    pwd_input.classList.remove("error")
    document.getElementById("pwd").style.display = "none"
  }


}
