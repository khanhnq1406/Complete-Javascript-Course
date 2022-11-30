'use strict';

// Selecting elements
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const dice = document.querySelector('.dice');

// Storing variables
let currentScore = 0;
let score = [0, 0];
let activePlayer = 0;
let playing = true;
const winnerScore = 20;
// Starting editions
const Starting = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  currentScore = 0;
  score = [0, 0];
  activePlayer = 0;
  playing = true;
  dice.classList.add('hidden');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};
Starting();

// Change display when swap user
const playerDisplay = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  player1.classList.toggle('player--active');
  player0.classList.toggle('player--active');
};

// Rolling dice functionality
const RollingDice = function () {
  if (playing) {
    // Generate random dice roll
    const rollNumber = Math.floor(Math.random() * 6 + 1);
    console.log(rollNumber);

    // Display dice roll
    dice.classList.remove('hidden');
    dice.src = `dice-${rollNumber}.png`;

    if (rollNumber !== 1) {
      // Add dice to current score
      currentScore += rollNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      playerDisplay();
      activePlayer = activePlayer === 0 ? 1 : 0;
    }
  }
};

// Hoding score function
const HoldingScore = function () {
  if (playing) {
    score[activePlayer] += currentScore;
    if (score[activePlayer] >= winnerScore) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
    } else {
      playerDisplay();
    }
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    activePlayer = activePlayer === 0 ? 1 : 0;
  }
};

btnRoll.addEventListener('click', RollingDice);
btnHold.addEventListener('click', HoldingScore);
btnNew.addEventListener('click', Starting);
