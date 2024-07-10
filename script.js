let boxes=document.querySelectorAll(" .box");
let resetBtn= document.querySelector("#ResetButton");
let newBtn=document.querySelector("#newbutton");
let msgcontainer=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");

let turn0=true ;
let count =0; //playerX, palyer0
 const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];

 const resetGame =() =>{

    turn0=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
 };


 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        
        if(turn0){
            //player0
            box.innerText="0";
            turn0=false;
        }
        else{
            //playerX
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        count++;

        let isWinner = checkWinner();
        if(count==9&& ! isWinner){
            gamedraw();
        }
    });

 });

 const gamedraw=()=>{
    msg.innerText =`Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
 };

 const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }

 };

 const enableBoxes = () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText = "";
    }
 };
 

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};


//check winner

 const checkWinner= () =>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if (pos1Val !="" && pos2Val !="" && pos3Val!= "" ) {
            if(pos1Val===pos2Val && pos2Val===pos3Val){
               
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
    }

 };

 

 newBtn.addEventListener("click", resetGame);
 resetBtn.addEventListener("click", resetGame);

 

 
 


 

