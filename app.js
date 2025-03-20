let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let highscore = document.querySelector("span");
let btns = ["red", "yellow", "green", "purpule"];

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    console.log("game started");
    levelup();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 500);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 150);
}

function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;
  let randIndx = Math.floor(Math.random() * 4);
  let randColor = btns[randIndx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}
let high = 0;
function checkAns(idx) {
  if (gameSeq[idx] === userSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerText = `Game over! your score was ${level} \n press any key to Restart game`;

    if (high < level) {
      high = level;
      highscore.innerText = high;
    }
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
 
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
  }
function btnpress() {
  // console.log(this)
  let btn = this;
  userFlash(btn);
  let usercolor = btn.getAttribute("id");
  userSeq.push(usercolor);
  console.log(userSeq);
  checkAns(userSeq.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for (let btn of allbtn) {
  btn.addEventListener("click", btnpress);
}
