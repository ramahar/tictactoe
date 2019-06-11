// Contains all winning combinations 
var winners = new Array();
// Store selections in array 
var player1Selections = new Array();
var player2Selections = new Array();

var currentPlayer = 0;  // keeps track of current player 
var points1 = 0;    // player 1
var points2 = 0;    // player 2 
var size = 3;   // Size of playing board 

function drawBoard() {
  var parent = document.getElementById("game");
  var counter = 1;

  for (let i = 0; i < 3; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < size; j++) {
      let col = document.createElement("td");
      col.innerHTML = counter;

      row.appendChild(col);
    }
    parent.appendChild(row);
  }
}