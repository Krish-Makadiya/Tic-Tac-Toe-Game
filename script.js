let boxes = document.querySelectorAll('.box');
let chance = document.querySelector('#playerTurn');
let resetBtn = document.querySelector('.reset-btn');

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
        if(count == 9){
            console.log('Tie')
        }
        else{
            checkWinner();
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
                console.log(`winner is ${pos1.innerText}`);

                // to change color after winning
                if(pos1.innerText == 'X'){
                    pos1.style.color = '#263b46';
                    pos2.style.color = '#263b46';
                    pos3.style.color = '#263b46';

                    pos1.style.backgroundColor = '#2dc3bf';
                    pos2.style.backgroundColor = '#2dc3bf';
                    pos3.style.backgroundColor = '#2dc3bf';
                }
                else{
                    pos1.style.color = '#263b46';
                    pos2.style.color = '#263b46';
                    pos3.style.color = '#263b46';

                    pos1.style.backgroundColor = '#f2b03e';
                    pos2.style.backgroundColor = '#f2b03e';
                    pos3.style.backgroundColor = '#f2b03e';
                }

                // not to let any other box click when winner is found
                afterWin();
            }
        }
    }
}

let afterWin = ()=>{
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

resetBtn.addEventListener('click', ()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
        turnX = true;
        chance.innerText = 'X';
        count = 0;
        box.style.backgroundColor = '#263b46'
    })
})






