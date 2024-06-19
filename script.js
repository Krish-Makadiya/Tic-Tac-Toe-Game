let boxes = document.querySelectorAll('.box');
let chance = document.querySelector('#playerTurn');
let resetBtn = document.querySelector('.reset-btn');
let winner = document.querySelector('.player');
let filter = document.querySelector('.no-filter');
let winBanner = document.querySelector('.win-lose');
let newGame = document.querySelectorAll('.newRound-btn');
let tieGame = document.querySelector('.tie-match');
let roundTaken = document.querySelector('.round-taken');

let turnX = true;
let count = 0;
let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener('click', ()=>{
        if(turnX){
            box.innerText = 'X';
            box.style.color = '#2dc3bf';
            turnX = false;
            chance.innerText = 'O';
        }
        else{
            box.innerText = 'O';
            box.style.color = '#f2b03e';
            turnX = true;
            chance.innerText = 'X';
        }
        box.disabled = true;  
        count += 1;
        
        if(checkWinner()){
            return;
        }
        if(count == 9){
            tieGame.classList.add('enable');
            newGame[1].style.backgroundColor = '#a9bec9';
            newGame[1].style.boxShadow = '0 2px #a9bec9a5';
            filter.classList.add('filter');
            newGame[1].addEventListener('click', ()=>{
                resetGame();
                tieGame.classList.remove('enable');
                filter.classList.remove('filter');
            })
        }
    });
});

let checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]];
        let pos2 = boxes[pattern[1]];
        let pos3 = boxes[pattern[2]];
        
        if(pos1.innerText != "" && pos2.innerText != "" && pos3.innerText != ""){
            if(pos1.innerText === pos2.innerText && pos2.innerText === pos3.innerText){

                // to change color after winning
                if(pos1.innerText == 'X'){
                    pos1.style.color = '#263b46';
                    pos2.style.color = '#263b46';
                    pos3.style.color = '#263b46';

                    pos1.style.backgroundColor = '#2dc3bf';
                    pos2.style.backgroundColor = '#2dc3bf';
                    pos3.style.backgroundColor = '#2dc3bf';

                    winner.innerText = 'X';
                    winner.style.color = '#2dc3bf';
                    roundTaken.style.color = '#f2b03e';
                    winBanner.classList.add('enable');
                    newGame[0].style.backgroundColor = '#2dc3bf';
                    newGame[0].style.boxShadow = '0 2px #2dc3bfa5';
                    filter.classList.add('filter');
                    return true;
                }
                else{
                    pos1.style.color = '#263b46';
                    pos2.style.color = '#263b46';
                    pos3.style.color = '#263b46';
                    
                    pos1.style.backgroundColor = '#f2b03e';
                    pos2.style.backgroundColor = '#f2b03e';
                    pos3.style.backgroundColor = '#f2b03e';
                    
                    winner.innerText = 'O';
                    winner.style.color = '#f2b03e';
                    roundTaken.style.color = '#2dc3bf';
                    winBanner.classList.add('enable');
                    newGame[0].style.backgroundColor = '#f2b03e';
                    newGame[0].style.boxShadow = '0 2px #f2b03ea5';
                    filter.classList.add('filter');
                    return true;
                }

                // not to let any other box click when winner is found
                afterWin();
            }
        }
    }
}

let resetGame = ()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
        turnX = true;
        chance.innerText = 'X';
        count = 0;
        box.style.backgroundColor = '#263b46'
    })
}

newGame[0].addEventListener('click', ()=>{
    resetGame();
    winBanner.classList.remove('enable');
    filter.classList.remove('filter');
})

let afterWin = ()=>{
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

resetBtn.addEventListener('click', ()=>{
    resetGame();
});