const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");
const iconrock = document.getElementById("icon-rock");
const computericon = document.getElementById("icon-computer");
const icons = ["🤜", "🖐️", "✌️"];
const statusDisplay = document.getElementById("stats");
let computerscore = document.getElementById("zerocomp");
let playerscore = document.getElementById("zeroply");

let computerCount = 0;
let playerCount = 0;

function randomSelect() {
  const randomIndex = Math.trunc(Math.random() * icons.length);

  if (randomIndex === 0) {
    computericon.textContent = "🤜";
  } else if (randomIndex === 1) {
    computericon.textContent = "🖐️";
  } else {
    computericon.textContent = "✌️";
  }
  return randomIndex;
}

rockbtn.addEventListener("click", () => {
  iconrock.textContent = "🤜";
  const randomIndex = randomSelect();

  if (randomIndex === 0) {
    statusDisplay.textContent = `draw`;
  } else if (randomIndex === 1) {
    statusDisplay.textContent = `computer wins`;
    computerCount++;
  } else {
    statusDisplay.textContent = `player wins`;
    playerCount++;
  }
  computerscore.textContent = computerCount;
  playerscore.textContent = playerCount;
});
paperbtn.addEventListener("click", () => {
  iconrock.textContent = "🖐️";
  const randomIndex = randomSelect();
  if (randomIndex === 0) {
    statusDisplay.textContent = `Player wins`;
    playerCount++;
  } else if (randomIndex === 1) {
    statusDisplay.textContent = `Draw`;
  } else {
    statusDisplay.textContent = `Computer wins`;
    computerCount++;
  }
  computerscore.textContent = computerCount;
  playerscore.textContent = playerCount;
});
scissorsbtn.addEventListener("click", () => {
  iconrock.textContent = "✌️";
  const randomIndex = randomSelect();
  if (randomIndex === 0) {
    statusDisplay.textContent = `Computer wins`;
    computerCount++;
  } else if (randomIndex === 1) {
    statusDisplay.textContent = `Player wins`;
    playerCount++;
  } else {
    statusDisplay.textContent = `Draw`;
  }
  computerscore.textContent = computerCount;
  playerscore.textContent = playerCount;
});
