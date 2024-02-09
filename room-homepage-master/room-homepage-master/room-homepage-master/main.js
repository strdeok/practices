var page = 1;

$(".prev").on("click", () => {
  if (page == 1) {
    $(".header1").css("display", "none");
    $(".header3").css("display", "flex");
    page = 3;
    console.log("page3");
  } else if (page == 2) {
    $(".header2").css("display", "none");
    $(".header1").css("display", "flex");
    page = 1;
    console.log("page1");
  } else if (page == 3) {
    $(".header3").css("display", "none");
    $(".header2").css("display", "flex");
    page = 2;
    console.log("page2");
  }
});

$(".next").on("click", () => {
  if (page == 1) {
    $(".header1").css("display", "none");
    $(".header2").css("display", "flex");
    page = 2;
    console.log("page2");
  } else if (page == 2) {
    $(".header2").css("display", "none");
    $(".header3").css("display", "flex");
    page = 3;
    console.log("page3");
  } else if (page == 3) {
    $(".header3").css("display", "none");
    $(".header1").css("display", "flex");
    page = 1;
    console.log("page1");
  }
});

$(".hamburger").on("click", function () {
  $(".modal").css("top", "-50px");
  $(".modal").css("box-shadow", "rgba(0, 0, 0, 0.5) 0 0 0 9999px");
  $(".modal").css("z-index", "100");
});

$(".close-btn").on("click", () => {
  $(".modal").css("top", "-200px");
  $(".modal").css("box-shadow", "unset");
});
