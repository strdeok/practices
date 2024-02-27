var btn = document.querySelector("button");
var share_con = document.querySelector("#share");
var share_box = document.querySelector(".share_part");

btn.addEventListener("click", function () {
  btn.classList.toggle("btn_active");
  share_con.classList.toggle("active");
  share_box.classList.toggle("share_active");
});

function facebook_share() {
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("#")
  );
}

function twit_share() {
  window.open(
    "http://twitter.com/home?status=" +
      encodeURIComponent("#") +
      " " +
      encodeURIComponent("#")
  );
}

function pinterest_share() {
  window.open(
    "http://www.pinterest.com/pin/create/button/?url=" +
      encodeURIComponent("#") +
      "&media=" +
      encodeURIComponent("") +
      "&description=" +
      encodeURIComponent("#")
  );
}
