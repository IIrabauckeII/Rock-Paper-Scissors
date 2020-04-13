//Rock, Paper, Scissors - Game Mechanics
const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
let gamesPlayed = 0;
let computerWins = 0;
let playerWins = 0;

const alertBox = document.querySelector('#alert');

function showAlertBox() {
  alertBox.classList.add("alertShown");
  alertBox.style['background-color'] = "#2196F3";
  alertBox.innerHTML = `<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  Computer is playing...`
}

function playRound(playerSelection) {
  gamesPlayed++;
  let computerSelection = rockPaperScissors[Math.floor(Math.random() * 3)];
  // tie
  if (playerSelection == computerSelection) {
    showAlertBox();
    setTimeout(function () {
      alertBox.innerHTML = `<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
      It's a Tie. You selected the same symbol as the computer.`
    }, 1300);
    ;
      }
  // Computer wins
  if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
      showAlertBox();
      setTimeout(function () {
        alertBox.innerHTML = `<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        You Lose! ${computerSelection} beats ${playerSelection}.`;
        alertBox.style['background-color'] = "red";
      }, 1300);

      computerWins++;
    }
  // Player wins
  if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
    showAlertBox();
    setTimeout(function () {
      alertBox.innerHTML = `<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
      You Win! ${playerSelection} beats ${computerSelection}.`;
      alertBox.style['background-color'] = "green";
    }, 1300);
    playerWins++;
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

// ToDo: await async, close button background color, reset background color; fix close button/ delete close button?
