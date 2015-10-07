window.onload = function() {
  
  var player1;
  var player2;
  var player1Move = [];
  var player2Move = [];
  var square = document.getElementsByClassName("inputUser");
  var squareId;
  var reset = document.getElementById('reset');
  var move = [];
  var winner;
  var winning = [[0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  for (var i=0; i <square.length; i++){
    square[i].addEventListener('click', getSquareId);
  }

  
  reset.addEventListener('click', function clear() {
    for (var j = 0; j < move.length; j ++) {
      document.getElementById(move[j]).value = "";
      document.getElementById(move[j]).style.background = "black";
      document.getElementById(move[j]).disabled = false;
      player1Move = [];
      player2Move = [];
    }
    move = [];
  })

  function getInput(x) {
    document.getElementById(x).value;
  }

  function getSquareId() {
    squareId  = (this.id);
    console.log(squareId);
    getPlayerMove();
  }

  
  function getPlayerMove() {
    move.push(squareId);
    console.log(move);
      if ((move.length) % 2 === 0 ) {
        document.getElementById('display-player-turn').value = "Player 1 turn";
        document.getElementById('display-player-turn').style.background = "black";
        player2Move.push(squareId);
        document.getElementById(squareId).value = "O";
        document.getElementById(squareId).style.background = "#FE97DC";
        document.getElementById(squareId).disabled = true;
        getWinner();
      }

      else {
        document.getElementById('display-player-turn').value = "Player 2 turn";
        document.getElementById('display-player-turn')
        document.getElementById('display-player-turn').style.background = "black";
        player1Move.push(squareId);
        document.getElementById(squareId).value = "X";
        document.getElementById(squareId).style.background = "#1CE0FD";
        document.getElementById(squareId).disabled = true;
        getWinner();
      }  
    console.log('Player 2 clicked on : ' +player2Move);
    console.log('Player 1 clicked on : ' +player1Move);
  }

  function getWinner() {
    console.log(move);
      for (var o = 0; o < winning.length; o++) {
        if (move.length === 9) {
          if ((XO(winning[o][0]) ==  XO(winning[o][1])) && (XO(winning[o][0]) == XO(winning[o][2]))) { 
            if (XO(winning[o][0]) === 'X') {
              document.getElementById('display-player-turn').value = "Winner: Player 1";
            }
            else if (XO(winning[o][0]) === 'O') {
                document.getElementById('display-player-turn').value = "Winner: Player 2";
            }
          }
          else {
            document.getElementById('display-player-turn').value = "It's a tie";
          }
        }
        else if ((XO(winning[o][0]) ==  XO(winning[o][1])) && (XO(winning[o][0]) == XO(winning[o][2]))) { 
          if (XO(winning[o][0]) === 'X') {
              document.getElementById('display-player-turn').value = "Winner: Player 1";
              // document.getElementById('square').disabled = true;
          }

          else if (XO(winning[o][0]) === 'O') {
              document.getElementById('display-player-turn').value = "Winner: Player 2";
              // document.getElementById('square').disabled = true;
          }
               
        }
      }
  }
    //Solution works but not scalable

    //   if (document.getElementById('0').value === 'X' && document.getElementById('1').value === 'X' && document.getElementById('2').value === 'X') {
    //     console.log("Player 1 wins");
    //   }

    // // function getWinner() { NOT working because cannot compare array
    //   if (player1Move.value == ["0", "1", "2"]){
    //     console.log('Player 1 wins');

  function XO(x) {
    return document.getElementById(x).value;
  }
}
