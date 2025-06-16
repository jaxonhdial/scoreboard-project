let homeScoreEl = document.getElementById("home");
let awayScoreEl = document.getElementById("away");
let resetEl = document.getElementById("reset-button");

let homeScore = 0;
let awayScore = 0;

function add1Home() {
    homeScore++;
    homeScoreEl.textContent = homeScore;
}
function add2Home() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}
function add3Home() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function add1Away() {
    awayScore++;
    awayScoreEl.textContent = awayScore;
}
function add2Away() {
    awayScore += 2;
    awayScoreEl.textContent = awayScore;
}
function add3Away() {
    awayScore += 3;
    awayScoreEl.textContent = awayScore;
}

function reset() {
    let winnerEl = document.getElementById("winner");
    if (homeScore > awayScore) {
        winnerEl.textContent = "Home Wins!"
    }
    else if (homeScore < awayScore) {
        winnerEl.textContent = "Away Wins!"
    }
    else if (homeScore = awayScore) {
        winnerEl.textContent = "It's a Tie!"
    }

    homeScore = 0;
    awayScore = 0;
    homeScoreEl.textContent = 0;
    awayScoreEl.textContent = 0;
}