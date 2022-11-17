'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.highscore').textContent = '15';

document.querySelector('.number').textContent = '9';

document.querySelector('.guess').value = '14';
*/

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highScore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);

  // When there is no input
  if (!guessNumber) {
    displayMessage('⛔ No number');

    // When player wins
  } else if (guessNumber === number) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is wrong
  } else if (guessNumber !== number) {
    if (score > 1) {
      displayMessage(guessNumber < number ? '⬇️ Too low' : '⬆️ Too high');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥 You lose';
      document.querySelector('.score').textContent = 0;
    }
  }
  // // When guess is too low
  // else if (guessNumber < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⬇️ Too low';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😥 You lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // When guess is too high
  // else if (guessNumber > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⬆️ Too high';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😥 You lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
