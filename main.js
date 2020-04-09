//Rock, Paper, Scissors - Game Mechanics
const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
let gamesPlayed = 0;
let computerWins = 0;
let playerWins = 0;

function playRound(playerSelection) {
  gamesPlayed++;
  let computerSelection = rockPaperScissors[Math.floor(Math.random() * 3)];
  // tie
  if (playerSelection == computerSelection) {
      alert(`Computer selected ${computerSelection}.


It's a Tie. You selected the same symbol as the computer.`)
      }
  // Computer wins
  if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
      computerWins++;
      alert(`Computer selected ${computerSelection}.


You Lose! ${computerSelection} beats ${playerSelection}.`)
    }
  // Player wins
  if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
    playerWins++;
    alert(`Computer selected ${computerSelection}.


You Win! ${playerSelection} beats ${computerSelection}.`)
    }
  document.getElementById('stats').innerHTML = `Games Played: ${gamesPlayed}  |  Games Won: ${playerWins}  |  Games Lost: ${computerWins}`;

}


// event listener - button clicks
document.getElementById("Rock").addEventListener("click", function() {playRound("Rock")});
document.getElementById("Paper").addEventListener("click", function() {playRound("Paper")});
document.getElementById("Scissors").addEventListener("click", function() {playRound("Scissors")});


//JSCSS
//random Subtitle
const subtitles = ["Make your choice!", "What's your choice going to be?", "Pick one of the three options!", "Click on one of the symbols below!"];
const randomSubtitle = () => {
  let randomNumber = Math.floor(Math.random()*4);
  return subtitles[randomNumber];
};

document.getElementById('subtitle').innerHTML = randomSubtitle();

//counter


// ToDo: delay ergebnis
