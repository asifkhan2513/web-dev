const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameButton = document.querySelector(".btn");
let currPlayer;
let gameGrid;
const winningPosition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function initGame() {
  currPlayer = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  // ui updateing for new button
  boxes.forEach((box, index) => {
    box.innerText = "";
    boxes[index].style.pointerEvents = "all";
    // one more thing pending
    box.classList = `box box${index + 1}`;
  });
  newGameButton.classList.remove("active");
  gameInfo.innerText = `current player ${currPlayer}`;
}
function swapTurn() {
  if (currPlayer === "X") {
    currPlayer = "0";
  } else {
    currPlayer = "X";
  }
  gameInfo.innerText = `Current player - ${currPlayer}`;
}
initGame();
function checkGameOver() {
  let answer = "";
  winningPosition.forEach((position) => {
    
    // all three boxes should be not non empty and exactly same value
    if (
      (gameGrid[position[0]] !== "" ||
        gameGrid[position[1]] !== "" ||
        gameGrid[position[2]] !== "") &&
      gameGrid[position[0]] === gameGrid[position[1]] &&
      gameGrid[position[1]] === gameGrid[position[2]]
    ) {
      // check x is winnner
      if (gameGrid[position[0]] === "X") answer = "X";
      else answer = "0";

      // disable pointer event
      boxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });
      // now we know x / 0 will bve winner
      boxes[position[0]].classList.add("win");
      boxes[position[1]].classList.add("win");
      boxes[position[2]].classList.add("win");
    }
  });
  // it mean we have winner
  if (answer !== "") {
    gameInfo.innerText = `winner player is ${answer}`;
    newGameButton.classList.add("active");
    return;
  }
  //lets check wether ther is tie
  let fillCount = 0;
  gameGrid.forEach((box) => {
    if (box !== "") {
      fillCount++;
    }
    if (fillCount === 9) {
      gameInfo.innerText = "Game tied";
      newGameButton.classList.add("active");
    }
  });
}
function handleClick(index) {
  if (gameGrid[index] === "") {
    boxes[index].innerText = currPlayer;
    gameGrid[index] = currPlayer;
    boxes[index].style.pointerEvents = "none";
    //swap turn
    swapTurn();
    // any win
    checkGameOver();
  }
}
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    handleClick(index);
  });
});
newGameButton.addEventListener("click", initGame);
