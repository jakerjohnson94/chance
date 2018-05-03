optionsArr = ["rock", "paper", "scissors"];
const outputMsg = document.createElement('h2');
const userMsg = document.createElement('h4');
const cpuMsg = document.createElement('h4')
const output = document.getElementById("output");
const userOut = document.getElementById('userOut');
const cpuOut = document.getElementById('cpuOut');
const submit = document.getElementsByName("submit");

const winningConditions = {
  paper: {
    winsAgainst: "rock"
  },
  scissors: {
    winsAgainst: "paper"
  },
  rock: {
    winsAgainst: "scissors"
  }
};




function getCpuChoice() {
  const choice = optionsArr[Math.floor(Math.random() * Math.floor(3))];
  return choice;
}
function getUserChoice(value) {
  return value;
}

function decideWinner(cpuVal, userVal) {
  if (cpuVal === userVal) return "Draw!";
  return  winningConditions[cpuVal].winsAgainst === userVal
      ? "You lose!"
      : "You win!";
}

function playRPS(choice) {
  const cpuChoice = getCpuChoice();

  const userChoice = getUserChoice(choice);
  const winner = decideWinner(cpuChoice, userChoice);
  outputMsg.textContent = winner;
  userMsg.textContent = `You Chose: ${capitalizeFirstLetter(userChoice)} `;
  cpuMsg.textContent = `The CPU Chose: ${capitalizeFirstLetter(cpuChoice)} `
  output.appendChild(outputMsg);
  userOut.appendChild(userMsg);
  cpuOut.appendChild(cpuMsg);

}

function capitalizeFirstLetter(str){
   return str.charAt(0).toUpperCase()+str.slice(1)
}