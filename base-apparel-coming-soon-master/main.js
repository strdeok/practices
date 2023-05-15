function email_check(email) {
  var reg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return reg.test(email);
}

function val() {
  var email_input = document.getElementById("email");
  if (email_input.value === "") {
    email_input.classList.remove("active");
    email_input.classList.add("active");
    document.getElementById("error_msg").style.display = "block";
  } else if (!email_check(email_input.value)) {
    email_input.classList.remove("active");
    email_input.classList.add("active");
    document.getElementById("error_msg").style.display = "block";
  } else {
    email_input.classList.remove("active");
    document.getElementById("error_msg").style.display = "none";
  }
}
