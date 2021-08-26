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

const moveTypes = ["Rock", "Paper", "Scissors"];
const playerTypes = ["Player One", "Player Two"];
const checkNumber = num => {
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
      playerTypes.includes(player) &&
      moveTypes.includes(moveOneType) &&
      checkNumber(moveOneValue) &&
      moveTypes.includes(moveTwoType) &&
      checkNumber(moveTwoValue) &&
      moveTypes.includes(moveThreeType) &&
      checkNumber(moveThreeValue) &&
      checkNumber(moveOneValue + moveTwoValue + moveThreeValue)
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
  }
  if (player === "Player Two") {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeValue = moveThreeValue;
  }
};

const getRoundWinner = roundNumber => {};

const getGameWinner = () => {};

const setComputerMoves = () => {};
