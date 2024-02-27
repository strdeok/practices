var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var timer = 0;
var cactus여러개 = [];
var 체공시간 = 0;
var animation;

function 프레임마다실행기() {
  animation = requestAnimationFrame(프레임마다실행기);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 120 === 0) {
    var cactus = new Cactus();
    cactus여러개.push(cactus);
    cactus.draw();
  }
  cactus여러개.forEach((a, i, o) => {
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x--;

    충돌확인(dino, a);
    a.draw();
  });

  if (스위치 == true) {
    dino.y--;
    체공시간++;
  }
  if (체공시간 > 100) {
    스위치 = false;
    체공시간 = 0;
  }

  if (스위치 == false) {
    if (dino.y < 200) {
      dino.y++;
    }
  }
  dino.draw();
}
프레임마다실행기();

function 충돌확인(dino, cactus) {
  var x축차이 = cactus.x - (dino.x + dino.width);
  var y축차이 = cactus.y - (dino.y + dino.height);
  if (x축차이 < 0 && y축차이 < 0) {
    cancelAnimationFrame(animation);
  }
}

var 스위치 = false;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    스위치 = true;
  }
});
