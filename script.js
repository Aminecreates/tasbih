const number = document.querySelector('.number');
const countBtn = document.querySelector('.countbtn');
const score = document.querySelector('.score');
const resetBtn = document.querySelector('.resetbtn');
const countLess = document.querySelector('.countless');
number.textContent = 0;
let count = 0;
let scoreX = 0;

countBtn.addEventListener('click', function () {
  count += 1;
  number.textContent = count;
  if (count > 10) {
    scoreX += count - 1;
    score.textContent = scoreX;
    count = 0;
    count += 1;
    number.textContent = count;
  }
});
countLess.addEventListener('click', function () {
  count -= 1;
  if (count < 0) {
    count = 0;
    scoreX += count - 1;
    if (scoreX < 0) {
      scoreX = 0;
    }
    score.textContent = scoreX;
  } else {
    number.textContent = count;
  }
});
resetBtn.addEventListener('click', function () {
  number.textContent = 0;
  count = 0;
  scoreX = 0;
  score.textContent = 0;
});

countLess.addEventListener('click', function () {});

const content = document.getElementsByTagName('body')[0];
const darkMode = document.getElementById('dark-change');
const button = document.getElementsByTagName('button');
const title = document.querySelector('.title');
const containerBg = document.querySelector('.first-container');
for (let i = 0; i < button.length; i++)
  darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
    button[i].classList.toggle('night');
    title.classList.toggle('night');
    containerBg.classList.toggle('bg-active');
  });
