// import functions and grab DOM elements
import { getRandomThrow, compareResult } from './rpsUtils.js';

const playButton = document.querySelector('#throw');

// initialize state
let wins = 0;
let draws = 0;
let totalGames = 0;
// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    // DOM Get elements
    const winsLabel = document.querySelector('#wins');
    const lossesLabel = document.querySelector('#losses');
    const drawsLabel = document.querySelector('#draws');
    const totalGamesLabel = document.querySelector('#total-games');
    
    const playerMoveLabel = document.querySelector('#player-move');
    const computerMoveLabel = document.querySelector('#computer-move');
    const winnerLabel = document.querySelector('#winner');
    const playerMove = document.querySelector('input:checked').id;
    const computerMove = getRandomThrow();

    playerMoveLabel.textContent = playerMove;
    computerMoveLabel.textContent = computerMove;

    const result = compareResult (playerMove, computerMove);
    switch (result) {
        case 'win' :
            wins++;
            winnerLabel.textContent = 'Player';
            break;
        case 'draw' :
            draws++;
            winnerLabel.textContent = 'Draw';
            break;
        case 'lose' :
            winnerLabel.textContent = 'Computer';
            break;        
    }
    totalGames++;
    winsLabel.textContent = wins;
    drawsLabel.textContent = draws;
    lossesLabel.textContent = totalGames - (wins + draws);
    totalGamesLabel.textContent = totalGames;
});