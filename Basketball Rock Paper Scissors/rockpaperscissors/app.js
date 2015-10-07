// create get player move function , player object, move is property of object
// create computer move function, comp ovject, move is property of object
// create compare porperties 


window.onload = function() {
  var rock     = document.getElementById('rock');
  var paper    = document.getElementById('paper')  ;
  var scissors = document.getElementById('scissors');
  var playerMove = {};
  var computerMove ={};
  var move = document.getElementsByTagName('li');
  var playerScore =0;
  var computerScore =0;
  var playerDisplay = document.getElementById('playerDisplay');
  var computerDisplay = document.getElementById('computerDisplay');
  var winnerDisplay = document.getElementById('winnerDisplay');
  var winning = {rock: "scissors", paper: "rock", scissors: "paper"}
  var rockImage =    document.getElementById('rockImage');
  var paperImage =    document.getElementById('paperImage');
  var scissorsImage = document.getElementById('scissorsImage');
  var heat1= document.getElementById('heat1');
  var spurs2= document.getElementById('spurs2');
  var heatCelebration = document.getElementById('heatCelebration');
  var spursCelebration = document.getElementById('spursCelebration');


  function getInput() {
    var i = 0;
    for(i; i < move.length; i++){
      move[i].addEventListener('click', clickOnChoice);
    }
  }
  function clickOnChoice(){ 
    playerMove.move = this.id;
    console.log("player move: " +playerMove.move);
    if(playerMove.move === 'rock'){
      rockImage.style.display = 'block';
      paperImage.style.display = 'none';
      scissorsImage.style.display = 'none'
    } else if(playerMove.move === 'paper'){
      paperImage.style.display = 'block';
      rockImage.style.display = 'none';
      scissorsImage.style.display = 'none'
    } else if(playerMove.move === 'scissors'){
      scissorsImage.style.display = 'block';
      paperImage.style.display = 'none';
      rockImage.style.display = 'none';
      }
    getComputerMove();
    getWinner();

  }

  function getComputerMove(){
    var randomNumber = Math.random();
    if(randomNumber < 0.33){
      computerMove.move = 'rock';
      rockImage2.style.display = 'block';
      paperImage2.style.display = 'none';
      scissorsImage2.style.display = 'none'

    } else if(randomNumber < 0.66){
      computerMove.move = 'paper';
      rockImage2.style.display = 'none';
      paperImage2.style.display = 'block';
      scissorsImage2.style.display = 'none'

    }else{
      computerMove.move = 'scissors'
      rockImage2.style.display = 'none';
      paperImage2.style.display = 'none';
      scissorsImage2.style.display = 'block'

    }
    console.log("computer move " +computerMove.move)
  }

  function getWinner() {
    if (computerMove.move == playerMove.move) {
      console.log("tie")
      heat1.style.display = 'none';
      spurs2.style.display = 'none';
      heatCelebration.style.display = 'none';
      spursCelebration.style.display = 'none';
      spursTie.style.display = 'block';

    }else if(computerMove.move == winning[playerMove.move]){
      console.log("player wins")
      playerScore +=1;
      heat1.style.display = 'block';
      spurs2.style.display = 'none';
      heatCelebration.style.display = 'none';
      spursCelebration.style.display = 'none';
      spursTie.style.display = 'none';
    }else{
      console.log("computer wins")
      computerScore +=1;
      heat1.style.display = 'none';
      spurs2.style.display = 'block'
      heatCelebration.style.display = 'none';
      spursCelebration.style.display = 'none';
      spursTie.style.display = 'none';
    }
     displayScore();
};
  function displayScore(){
    playerDisplay.innerHTML = playerScore;
    computerDisplay.innerHTML = computerScore;
    if(playerScore === 3){
      declarePlayerWinner();
    }else if(computerScore === 3){
      declareComputerWinner();
    }else{
    getInput();
  }
  }
  
  function declarePlayerWinner (){
    // winnerDisplay.innerHTML = "player wins with: " + playerScore + " to computer's : " + computerScore;
    heatCelebration.style.display = 'block';
    spursCelebration.style.display = 'none';
    heat1.style.display = 'none';
    spurs2.style.display = 'none';
    spursTie.style.display = 'none';

    playerScore = 0;
    computerScore =0;
  }
  function declareComputerWinner (){
    // winnerDisplay.innerHTML = "Computer wins with: " + computerScore + " to player's : " + playerScore;
    heatCelebration.style.display = 'none';
    spursCelebration.style.display = 'block';
    heat1.style.display = 'none';
    spurs2.style.display = 'none';
    spursTie.style.display = 'none';

    playerScore = 0;
    computerScore =0;
  }

  getInput();
}