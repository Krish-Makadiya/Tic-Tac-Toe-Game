let boxes = document.querySelectorAll('.box');

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
let turnX = true;

boxes.forEach((box) => {
    box.addEventListener('click', ()=>{
        if(turnX){
            box.innerText = 'X';
            turnX = false;
        }
        else{
            box.innerText = 'O';
            turnX = true;
        }
        box.disabled = true;     
        checkWinner();
    });
});

let checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log(`winner is ${pos1}`);
            }
        }
    }
    
}

