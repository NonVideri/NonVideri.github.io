// All code should be written in this file.
let playerOneMoveOneType = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveThreeType = undefined;
let playerTwoMoveOneType = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveThreeType = undefined;

let playerOneMoveOneValue = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeValue = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeValue = undefined;

const MOVE_TYPES = ["rock", "paper", "scissors"];
const PLAYER_TYPES = ["Player One", "Player Two"];
const ROUND_NUMBERS = [1, 2, 3];
const checkValue = num => {
  if (num >= 1 && num <= 99) {
    return true;
  } else {
    return false;
  }
};

const setPlayerMoves = (
  player,
  moveOneType,
  moveOneValue,
  moveTwoType,
  moveTwoValue,
  moveThreeType,
  moveThreeValue
) => {
  // Validate input
  if (
    !(
      PLAYER_TYPES.includes(player) &&
      MOVE_TYPES.includes(moveOneType) &&
      checkValue(moveOneValue) &&
      MOVE_TYPES.includes(moveTwoType) &&
      checkValue(moveTwoValue) &&
      MOVE_TYPES.includes(moveThreeType) &&
      checkValue(moveThreeValue) &&
      checkValue(moveOneValue + moveTwoValue + moveThreeValue)
    )
  ) {
    return;
  }
  // Set moves and values classic style
  if (player === "Player One") {
    playerOneMoveOneType = moveOneType;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeValue = moveThreeValue;
  } else {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeValue = moveThreeValue;
  }
};

const compareMoves = (moveOne, valueOne, moveTwo, valueTwo) => {
  if (!(moveOne && valueOne && moveTwo && valueTwo)) {
    return null;
  }
  if (
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One";
  } else if (
    (moveOne === "scissors" && moveTwo === "rock") ||
    (moveOne === "paper" && moveTwo === "scissors") ||
    (moveOne === "rock" && moveTwo === "paper")
  ) {
    return "Player Two";
  } else if (valueOne > valueTwo) {
    return "Player One";
  } else if (valueOne < valueTwo) {
    return "Player Two";
  } else {
    return "Tie";
  }
};

const getRoundWinner = roundNumber => {
  if (!ROUND_NUMBERS.includes(roundNumber)) return null;
  if (roundNumber === 1)
    return compareMoves(
      playerOneMoveOneType,
      playerOneMoveOneValue,
      playerTwoMoveOneType,
      playerTwoMoveOneValue
    );
  if (roundNumber === 2)
    return compareMoves(
      playerOneMoveTwoType,
      playerOneMoveTwoValue,
      playerTwoMoveTwoType,
      playerTwoMoveTwoValue
    );
  if (roundNumber === 3)
    return compareMoves(
      playerOneMoveThreeType,
      playerOneMoveThreeValue,
      playerTwoMoveThreeType,
      playerTwoMoveThreeValue
    );
};

const getGameWinner = () => {
  let playerOneScore = 0;
  let playerTwoScore = 0;
  for (let roundNumber of ROUND_NUMBERS) {
    const roundWinner = getRoundWinner(roundNumber);
    if (roundWinner === "Player One") playerOneScore++;
    if (roundWinner === "Player Two") playerTwoScore++;
    if (roundWinner === null) return null;
  }
  if (playerOneScore > playerTwoScore) return "Player One";
  if (playerOneScore < playerTwoScore) return "Player Two";
  if (playerOneScore === playerTwoScore) return "Tie";
};

const setComputerMoves = () => {};
