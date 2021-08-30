// All code should be written in this file.
let playerOneMoveOneType,
  playerOneMoveTwoType,
  playerOneMoveThreeType,
  playerTwoMoveTwoType,
  playerTwoMoveOneType,
  playerTwoMoveThreeType,
  playerOneMoveOneValue,
  playerOneMoveTwoValue,
  playerOneMoveThreeValue,
  playerTwoMoveOneValue,
  playerTwoMoveTwoValue,
  playerTwoMoveThreeValue;

const MOVE_TYPES = ["rock", "paper", "scissors"];
const PLAYER_TYPES = ["Player One", "Player Two"];
const ROUND_NUMBERS = [1, 2, 3];
const isValidMoveValue = num => {
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
    !PLAYER_TYPES.includes(player) ||
    !MOVE_TYPES.includes(moveOneType) ||
    !isValidMoveValue(moveOneValue) ||
    !MOVE_TYPES.includes(moveTwoType) ||
    !isValidMoveValue(moveTwoValue) ||
    !MOVE_TYPES.includes(moveThreeType) ||
    !isValidMoveValue(moveThreeValue) ||
    !isValidMoveValue(moveOneValue + moveTwoValue + moveThreeValue)
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
  if (!moveOne || !valueOne || !moveTwo || !valueTwo) {
    return null;
  }

  if (moveOne === moveTwo) {
    if (valueOne > valueTwo) {
      return "Player One";
    } else if (valueOne < valueTwo) {
      return "Player Two";
    } else {
      return "Tie";
    }
  }

  if (moveOne === "rock") {
    if (moveTwo === "scissors") return "Player One";
    else return "Player Two";
  }
  if (moveOne === "scissors") {
    if (moveTwo === "paper") return "Player One";
    else return "Player Two";
  }
  if (moveOne === "paper") {
    if (moveTwo === "rock") return "Player One";
    else return "Player Two";
  }
};

const getRoundWinner = roundNumber => {
  if (!ROUND_NUMBERS.includes(roundNumber)) return null;
  switch (roundNumber) {
    case 1:
      return compareMoves(
        playerOneMoveOneType,
        playerOneMoveOneValue,
        playerTwoMoveOneType,
        playerTwoMoveOneValue
      );
    case 2:
      return compareMoves(
        playerOneMoveTwoType,
        playerOneMoveTwoValue,
        playerTwoMoveTwoType,
        playerTwoMoveTwoValue
      );
    case 3:
      return compareMoves(
        playerOneMoveThreeType,
        playerOneMoveThreeValue,
        playerTwoMoveThreeType,
        playerTwoMoveThreeValue
      );
  }
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

const setComputerMoves = () => {
  playerTwoMoveOneType = MOVE_TYPES[Math.floor(Math.random() * 3)];
  playerTwoMoveTwoType = MOVE_TYPES[Math.floor(Math.random() * 3)];
  playerTwoMoveThreeType = MOVE_TYPES[Math.floor(Math.random() * 3)];
  playerTwoMoveOneValue = Math.ceil(Math.random() * 99);
  playerTwoMoveTwoValue = Math.ceil(Math.random() * (99 - playerTwoMoveOneValue));
  playerTwoMoveThreeValue = 99 - (playerTwoMoveOneValue + playerTwoMoveTwoValue);
};
