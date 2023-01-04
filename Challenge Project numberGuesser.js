let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10)
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => { 
  if (determineCloser(humanGuess, secretTarget) <= determineCloser(computerGuess, secretTarget)){
    return true;
  } else {
    return false;
  }
}

// const alertRange = (humanGuess) => {
//   if (humanGuess < 0 && humanGuess > 9) {
//     return alert(`number is out of range`)
//   }
// }

const determineCloser = (number, secretTarget) => {
  return Math.abs(number - secretTarget)
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++; 
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}

