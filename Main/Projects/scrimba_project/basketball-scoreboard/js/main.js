// get all elemets from DOM

const clock = document.querySelector('.timer-content');

const homeTeamScoreBtns = document.querySelector('.home__scoring-btn');
const homeTeamScore = document.querySelector('#score_home');

// Create a timer that runs from 0 to 12 minutes
// at the end of the timer, score of the highest should be blinking with a color change to green
// if the score is same, the color should be yellow for both team and the score should blink
// add Confetti Falling effect when the timer ends