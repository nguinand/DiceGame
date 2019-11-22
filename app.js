/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;


// dice = Math.floor(Math.random() *6) +1
// document.querySelector('#score-0').textContent = dice;
document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        let dice = Math.floor(Math.random() *6 +1);
        let diceRoll = document.querySelector('.dice');
        diceRoll.style.display= 'block';
        diceRoll.src = 'dice-' + dice +'.png';
        if(dice !== 1){
            console.log(dice);
            roundScore += dice;
            document.getElementById('current-'+activePlayer).textContent = roundScore;
        }
        else{
			diceRoll.src = 'dice-1.png'; //Wtf? wont show
            alert('You rolled a 1. Next players turn');
            nextPlayer();
            console.log(dice);
            roundScore = 0;
        };
    }
});

function nextPlayer(){
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

};

document.querySelector('.btn-hold').addEventListener('click', function(){
    //add to total
    //check the scores
    //set dom if winner
    //change player
    if(gamePlaying){
        document.getElementById('current-'+activePlayer).textContent = 0;
        scores[activePlayer] += roundScore;
        roundScore = 0;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 50){
            //set dom
            gamePlaying = false;
            document.getElementById('name-'+activePlayer).textContent = 'WINNER!';
            document.getElementById('name-'+Math.abs(activePlayer -1)).textContent = 'LOSER!';
            document.getElementById('name-'+activePlayer).classList.add('.winner');

        }
        else{
            nextPlayer();
        }
    }
});

function init(){
    scores=[0,0];
    activePlayer=0;
    roundScore =0;
    gamePlaying = true;

    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('name-1').textContent = 'Player2';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
};