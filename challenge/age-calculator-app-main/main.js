function day_cal() {
  var year_val = parseInt(document.getElementById("year_input").value);
  var month_val = parseInt(document.getElementById("month_input").value);
  var day_val = parseInt(document.getElementById("day_input").value);

  var birthdate = new Date(year_val, month_val - 1, day_val);
  var today = new Date();
  // year calculate----------------------------------------------------------
  if (year_val < 100) {
    birthdate.setFullYear(birthdate.getFullYear() - 1900);
  }

  var age = today.getFullYear() - birthdate.getFullYear();

  var month = today.getMonth() - birthdate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
    age--;
    month += 12;
  }
  var day = today.getDate() - birthdate.getDate();
  if (today.getDate() - birthdate.getDate() < 0) {
    month -= 1;
    day += 30;
  }

  // error.empty---------------------------------------------------------
  if (!day_val) {
    document.getElementById("day_empty").classList.add("error_display");
    document.getElementById("day_input").classList.add("red_box");
    document.getElementById("day").classList.add("font_red");
    age = "--";
    month = "--";
    day = "--";
  } else {
    document.getElementById("day_empty").classList.remove("error_display");
    document.getElementById("day_input").classList.remove("red_box");
    document.getElementById("day").classList.remove("font_red");
  }
  if (!month_val) {
    document.getElementById("month_empty").classList.add("error_display");
    document.getElementById("month_input").classList.add("red_box");
    document.getElementById("month").classList.add("font_red");
    age = "--";
    month = "--";
    day = "--";
  } else {
    document.getElementById("month_input").classList.remove("red_box");
    document.getElementById("month_empty").classList.remove("error_display");
    document.getElementById("month").classList.remove("font_red");
  }
  if (!year_val) {
    document.getElementById("year_empty").classList.add("error_display");
    document.getElementById("year_input").classList.add("red_box");
    document.getElementById("year").classList.add("font_red");
    age = "--";
    month = "--";
    day = "--";
  } else {
    document.getElementById("year_empty").classList.remove("error_display");
    document.getElementById("year_input").classList.remove("red_box");
    document.getElementById("year").classList.remove("font_red");
  }

  //error.other---------------------------------------------------------
  if (year_val > today.getFullYear()) {
    document.getElementById("past").classList.add("error_display");
    document.getElementById("year_input").classList.add("red");
    age = "--";
    month = "--";
    day = "--";
  } else {
    document.getElementById("past").classList.remove("error_display");
    document.getElementById("year_input").classList.remove("red");
  }

  if (month_val < 1 || month_val > 12) {
    document.getElementById("month_error").classList.add("error_display");
    document.getElementById("month_input").classList.add("red");
    age = "--";
    month = "--";
    day = "--";
  } else {
    document.getElementById("month_error").classList.remove("error_display");
    document.getElementById("month_input").classList.remove("red");
  }

  if (day_val < 1 || day_val > 31) {
    document.getElementById("day_error").classList.add("error_display");
    document.getElementById("day_input").classList.add("red");
    
    age = "--";
    month = "--";
    day = "--";
  } else {
    document.getElementById("day_error").classList.remove("error_display");
    document.getElementById("day_input").classList.remove("red");
  }

  if (
    month_val === 4 ||
    month_val === 6 ||
    month_val === 9 ||
    month_val === 11
  ) {
    if (day_val > 30) {
      document.getElementById("overday").classList.add("error_display");
      document.getElementById("day_input").classList.add("red");
      document.getElementById("month_input").classList.add("red");
      document.getElementById("year_input").classList.add("red");
      age = "--";
      month = "--";
      day = "--";
    } else {
      document.getElementById("overday").classList.remove("error_display");
      document.getElementById("day_input").classList.remove("red");
      document.getElementById("month_input").classList.remove("red");
      document.getElementById("year_input").classList.remove("red");
    }
  } 

  if (month_val === 2) {
    if (day_val > 28) {
      document.getElementById("overday").classList.add("error_display");
      document.getElementById("day_input").classList.add("red");
      document.getElementById("month_input").classList.add("red");
      document.getElementById("year_input").classList.add("red");
      age = "--";
      month = "--";
      day = "--";
    } else {
      document.getElementById("overday").classList.remove("error_display");
      document.getElementById("day_input").classList.remove("red");
      document.getElementById("month_input").classList.remove("red");
      document.getElementById("year_input").classList.remove("red");
    }
  }

  //enter---------------------------------------------------------
  document.querySelector(".big_font:nth-child(1) .change").innerHTML = age;
  document.querySelector(".big_font:nth-child(2) .change").innerHTML = month;
  document.querySelector(".big_font:nth-child(3) .change").innerHTML = day;
}
