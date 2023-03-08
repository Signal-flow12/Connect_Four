//event listeners for gameboard divs, score update, winning disk color, clear button.

//individual divs
const squares = document.querySelectorAll('.square');
//console.log(squares)
//messaging
const updateTurn = document.querySelector('.turn');
//clear board
const clear = document.querySelector('.clear');

//const taken = document.querySelectorAll(".taken")

let player;

//update score when someone wins
const redScore = document.querySelector('.redWins');
const yellowScore = document.querySelector('.yellowWins');

let redWins = 0;
let yellowWins = 0;

let gameOver = false;

//looping through winning arrays. Array within an array. 
function isAWinner () {
    const winners = [
        [squares[0], squares[1], squares[2], squares[3]],
        [squares[41], squares[40], squares[39], squares[38]],
        [squares[7], squares[8], squares[9], squares[10]],
        [squares[34], squares[33], squares[32], squares[31]],
        [squares[14], squares[15], squares[16], squares[17]],
        [squares[27], squares[26], squares[25], squares[24]],
        [squares[21], squares[22], squares[23], squares[24]],
        [squares[20], squares[19], squares[18], squares[17]],
        [squares[28], squares[29], squares[30], squares[31]],
        [squares[13], squares[12], squares[11], squares[10]],
        [squares[35], squares[36], squares[37], squares[38]],
        [squares[6], squares[5], squares[4], squares[3]],
        [squares[0], squares[7], squares[14], squares[21]],
        [squares[41], squares[34], squares[27], squares[20]],
        [squares[1], squares[8], squares[15], squares[22]],
        [squares[40], squares[33], squares[26], squares[19]],
        [squares[2], squares[9], squares[16], squares[23]],
        [squares[39], squares[32], squares[25], squares[18]],
        [squares[3], squares[10], squares[17], squares[24]],
        [squares[38], squares[31], squares[24], squares[17]],
        [squares[4], squares[11], squares[18], squares[25]],
        [squares[37], squares[30], squares[23], squares[16]],
        [squares[5], squares[12], squares[19], squares[26]],
        [squares[36], squares[29], squares[22], squares[15]],
        [squares[6], squares[13], squares[20], squares[27]],
        [squares[35], squares[28], squares[21], squares[14]],
        [squares[0], squares[8], squares[16], squares[24]],
        [squares[41], squares[33], squares[25], squares[17]],
        [squares[7], squares[15], squares[23], squares[31]],
        [squares[34], squares[26], squares[18], squares[10]],
        [squares[14], squares[22], squares[30], squares[38]],
        [squares[27], squares[19], squares[11], squares[3]],
        [squares[35], squares[29], squares[23], squares[17]],
        [squares[6], squares[12], squares[18], squares[24]],
        [squares[28], squares[22], squares[16], squares[10]],
        [squares[13], squares[19], squares[25], squares[31]],
        [squares[21], squares[15], squares[9], squares[3]],
        [squares[20], squares[26], squares[32], squares[38]],
        [squares[36], squares[30], squares[24], squares[18]],
        [squares[5], squares[11], squares[17], squares[23]],
        [squares[37], squares[31], squares[25], squares[19]],
        [squares[4], squares[10], squares[16], squares[22]],
        [squares[2], squares[10], squares[18], squares[26]],
        [squares[39], squares[31], squares[23], squares[15]],
        [squares[1], squares[9], squares[17], squares[25]],
        [squares[40], squares[32], squares[24], squares[16]],
        [squares[9], squares[17], squares[25], squares[33]],
        [squares[8], squares[16], squares[24], squares[32]],
        [squares[11], squares[17], squares[23], squares[29]],
        [squares[12], squares[18], squares[24], squares[30]],
        [squares[1], squares[2], squares[3], squares[4]],
        [squares[5], squares[4], squares[3], squares[2]],
        [squares[8], squares[9], squares[10], squares[11]],
        [squares[12], squares[11], squares[10], squares[9]],
        [squares[15], squares[16], squares[17], squares[18]],
        [squares[19], squares[18], squares[17], squares[16]],
        [squares[22], squares[23], squares[24], squares[25]],
        [squares[26], squares[25], squares[24], squares[23]],
        [squares[29], squares[30], squares[31], squares[32]],
        [squares[33], squares[32], squares[31], squares[30]],
        [squares[36], squares[37], squares[38], squares[39]],
        [squares[40], squares[39], squares[38], squares[37]],
        [squares[7], squares[14], squares[21], squares[28]],
        [squares[8], squares[15], squares[22], squares[29]],
        [squares[9], squares[16], squares[23], squares[30]],
        [squares[10], squares[17], squares[24], squares[31]],
        [squares[11], squares[18], squares[25], squares[32]],
        [squares[12], squares[19], squares[26], squares[33]],
        [squares[13], squares[20], squares[27], squares[34]],
      ]
    //looping through winning arrays(Array within an array). 
    //Checking for a winner. 
      for (let i = 0; i < winners.length; i++){
            //console.log(winners[i])
        if (winners[i][0].innerHTML === "Red" && winners[i][1].innerHTML === "Red" && winners[i][2].innerHTML === "Red" && winners[i][3].innerHTML === "Red"){
            console.log(winners[i][3])
            redWins ++;
            redScore.innerHTML = redWins; 
            return true;
        }else if (winners[i][0].innerHTML === "Yellow" && winners[i][1].innerHTML === "Yellow" && winners[i][2].innerHTML === "Yellow" && winners[i][3].innerHTML === "Yellow"){
                yellowWins ++;
                yellowScore.innerHTML = yellowWins; 
                return true;
        }
      }
    return false;
} 

//console.log(isAwinner())

//choose who goes first 
const startAsRed = document.querySelector(".redDisk")
const startAsYellow = document.querySelector(".yellowDisk")

//choose to start as Red
startAsRed.addEventListener('click', () => {
    //console.log("Red Goes First")
    if (player === undefined || player === "Yellow"){
        player = "Red"
    }
    updateTurn.innerHTML = "Red goes first!"
});

//choose to start as Yellow
startAsYellow.addEventListener('click', () => {
    //console.log("Yellow Goes First")
    if (player === undefined || player === "Red"){
        player = "Yellow"
    }
    updateTurn.innerHTML = "Yellow goes first!"
});

//button to clear board
clear.addEventListener("click", () => {
    for (let i = 0; i < squares.length; i++){
        squares[i].innerHTML = ""
    }
})

//clear.onclick = () => squares.innerHTML = "";

//function to clear the board
//sets Divs back to empty strings. 
function clearBoard () {
    for (let i = 0; i < squares.length; i++)
        squares[i].innerHTML = ""
 }


console.log()
//console.log(clearBoard())


for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', (e) => {
        if(squares[i + 7].classList.contains("taken")){
            if (player === "Red"){
                squares[i].innerHTML = "Red" 
                squares[i].classList.add("Red")
                squares[i].classList.add("taken")
                player = "Yellow"
                updateTurn.innerHTML = "Yellows Turn"
            }
            else if (player === "Yellow"){
                squares[i].innerHTML = "Yellow" 
                squares[i].classList.add("Yellow")
                squares[i].classList.add("taken")
                player = "Red"
                updateTurn.innerHTML = "Reds Turn"
            }  
        }else updateTurn.innerHTML = "Invalid Move!"
        isAWinner()
    })
}



