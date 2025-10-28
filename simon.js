let gameSeq = [];
let userSeq = [];
let higestLevel = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

let stated = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (stated == false) {
    console.log("game is started");
    stated = true;
  }

  levelup();
});

function gameFlesh(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlesh(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randInx = Math.floor(Math.random() * 3);
  let randColor = btns[randInx];
  let randBtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  console.log(gameSeq);

  gameFlesh(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    if (higestLevel < level) {
      higestLevel = level;
    }

    h2.innerHTML = `Game Over! YOur score was <b>${level}</b> <br>Press any key to start. <br>Your higest level ${higestLevel}`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "black";
    }, 150);
    reset();
  }
}

function btnpress() {
  let btn = this;
  userFlesh(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  stated = false;
  gameSeq = [];
  gameSeq = [];
  level = 0;
}