let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameButton=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let trunO=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    trunO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(trunO==true)
        { 
            box.innerText="O";
            box.style.color="red";
            trunO=false;
        }
        else{
            box.innerText="X";
            box.style.color="blue";
            trunO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkwinner();
        
        if(count==9 && !isWinner){
            gameDraw();
        } 
    } );
});

const gameDraw=()=>{
    msg.innerText="!!! DRAW !!!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes=()=>{
 for(let box of boxes)
 {
    box.disabled=true;
 }
}
const enableBoxes=()=>{
 for(let box of boxes)
 {
    box.disabled=false;
    box.innerText="";
 }
}

const showWinner=(winner)=>{
    msg.innerText=`Player ${winner} wins!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}


const checkwinner=()=>{
     for(let pattern of winPatterns)
     {
        
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;
        
        if(posVal1!="" && posVal2!="" && posVal3!="")
        {
            if(posVal1===posVal2&& posVal2===posVal3)
            {
                
                showWinner(posVal1);
            }
        }   
     }  
}



newGameButton.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);


