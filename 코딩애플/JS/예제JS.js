// JSON 데이터 가져와서 상품목록에 출력
$.get("/코딩애플/JS/document/store.json").done((data) => {
  data.products.forEach((a, i) => {
    var card = `<div class="card p-2" id=${i} style="width: 16rem" ondragstart="drag(event)" draggable="true">
        <img src="/코딩애플/JS/document/${
          data.products[i].photo
        }" class="card-img-top" />
        <div class="card-body">
          <h4 class="card-title product-name">${data.products[i].title}</h4>
          <p class="card-text">
            <small class="text-body-secondary">${data.products[i].brand}</small>
          </p>
          <p class="card-text price-bar">가격: <span class="price">${
            data.products[i].price
          }</span></p>
          <a class="btn btn-dark add" id=${i + 10}>담기</a>
        </div>
        </div>`;
    $(".card-box").append(card);
    console.log("로딩끝");
  });
});

//   검색기능
$(".form-control").keyup(function () {
  // 입력하면 싹다 지우고
  $(".card.p-2").css("display", "none");

  // 맞는것만 표시
  var 검색 = $("input").val();
  for (let k = 0; k < $(".product-name").length; k++) {
    if ($(".product-name").eq(k).text().replace(/\s+/g, "").match(검색)) {
      $(".card.p-2").eq(k).css("display", "block");
    }
  }
});

// 장바구니 담기
// 1. 드래그앤드롭
function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("card", e.target.id);
}

function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("card");
  e.target.appendChild(document.getElementById(data));
  var data_1 = document.getElementById(data);
  $(data_1).find("a").replaceWith(`<span>수량: </span><input class="count">`);
  $(".cart-box").remove();
}

// 2. 담기버튼
$(document).ready(function () {
  $(".add").on("click", function (e) {
    $(".cart").append($(this).closest(".card"));
    $(this).replaceWith(`<span>수량: </span><input class="count">`);
    $(".cart-box").remove();
  });
});
// 상품과 수량, 최종합계 금액
var total_price = 0;
var product_list = [];
var product_list_count = [];
var product_list_price = [];

$(document).on("input", ".count", function () {
  // 문서 전체에 변경 감지하고 price일 경우에 function 작동
  total_price = 0;
  $(".count").each(function () {
    total_price +=
      parseInt($(this).val()) *
        parseInt($(this).siblings(".price-bar").find(".price").text()) || 0;
    $(".final").css("display", "block");
    $(".final-price").text(total_price);
    // 상품 목록
    product_list.push($(this).siblings("h4").text());
    product_list = [...new Set(product_list)];
    // 상품 개수
    product_list_count.push($(this).val());
    product_list_count = product_list_count.slice(
      -$(".cart").children().length
    );
    // 상품 가격
    product_list_price.push(
      parseInt($(this).val()) *
        parseInt($(this).siblings(".price-bar").find(".price").text()) || 0
    );
    product_list_price = product_list_price.slice(
      -$(".cart").children().length
    );
  });
});
// 구매하기 하면 성함, 연락처 입력하는 모달창
document.querySelector('.send').addEventListener('click', function(e){
  // 왜 안먹힐까
  e.preventDefault();
});
// 모달창에서 구매완료 누르면 영수증을 이미지화
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
c.font = "5px";
var now = new Date();
c.fillText(now, 30, 50);
$(".send").on("click", () => {
  for (var k = 0; k < $(".cart").children().length; k++) {
    console.log(product_list[k]);
    c.fillText(`상품명: ${product_list[k]}`, 30, 80 + k * 4 * 10);
    c.fillText(`상품수량: ${product_list_count[k]}`, 30, 90 + k * 4 * 10);
    c.fillText(`상품가격: ${product_list_price[k]}`, 30, 100 + k * 4 * 10);
  }
  c.fillText(`총합계: ${total_price}`, 30, 300);
});

// 검색창에서 검색한 물품의 이름 표시 하는 것 / 드래그앤드롭 이벤트에서 상품이 복사가 되서 움직이기 / 구매 모달창 성함, 연락처 입력 안됐을때 이벤트 설정
// 뭔가 아쉽다.... 