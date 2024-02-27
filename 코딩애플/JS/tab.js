// $(".tab-button")
//   .eq(0)
//   .on("click", function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').eq(0).addClass('show');
//   });

//   $(".tab-button")
//   .eq(1)
//   .on("click", function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').eq(1).addClass('show');
//   });

//   $(".tab-button")
//   .eq(2)
//   .on("click", function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').eq(2).addClass('show');
//   });

/* --------------- 여기까지 loop 안쓰고 하는법---------------- */

var count = document.getElementsByTagName("p").length;

console.log(count);

for (let i = 0; i < count; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      $(".tab-button").removeClass("orange");
      $(".tab-button").eq(i).addClass("orange");
      $(".tab-content").removeClass("show");
      $(".tab-content").eq(i).addClass("show");
      console.log(i);
    });
}
