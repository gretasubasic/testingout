const buttonOne = document.querySelector("#playerOne");
const buttonTwo = document.querySelector("#playerTwo");
const reset = document.querySelector("#reset");

const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");


let p1Score = 0;
let p2Score = 0; 
let winningScore = 5;
let isGameOver = false;



buttonOne.addEventListener("click", function(){
    if (!isGameOver){
    p1Score += 1;

    if (p1Score === winningScore){
        isGameOver = true;
    }
   
    p1Display.textContent = p1Score;
}
})

buttonTwo.addEventListener("click", function(){
    if (!isGameOver){
    p2Score += 1;

    if (p2Score === winningScore){
        isGameOver = true;
    }
    p2Display.textContent = p2Score;
    
}
})