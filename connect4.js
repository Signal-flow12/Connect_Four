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
        [3, 10, 17, 24],
        [38, 31, 24, 17],
        [4, 11, 18, 25],
        [37, 30, 23, 16],
        [5, 12, 19, 26],
        [36, 29, 22, 15],
        [6, 13, 20, 27],
        [35, 28, 21, 14],
        [0, 8, 16, 24],
        [41, 33, 25, 17],
        [7, 15, 23, 31],
        [34, 26, 18, 10],
        [14, 22, 30, 38],
        [27, 19, 11, 3],
        [35, 29, 23, 17],
        [6, 12, 18, 24],
        [28, 22, 16, 10],
        [13, 19, 25, 31],
        [21, 15, 9, 3],
        [20, 26, 32, 38],
        [36, 30, 24, 18],
        [5, 11, 17, 23],
        [37, 31, 25, 19],
        [4, 10, 16, 22],
        [2, 10, 18, 26],
        [39, 31, 23, 15],
        [1, 9, 17, 25],
        [40, 32, 24, 16],
        [9, 17, 25, 33],
        [8, 16, 24, 32],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [1, 2, 3, 4],
        [5, 4, 3, 2],
        [8, 9, 10, 11],
        [12, 11, 10, 9],
        [15, 16, 17, 18],
        [19, 18, 17, 16],
        [22, 23, 24, 25],
        [26, 25, 24, 23],
        [29, 30, 31, 32],
        [33, 32, 31, 30],
        [36, 37, 38, 39],
        [40, 39, 38, 37],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
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
            }
            else if (player === "Yellow"){
                squares[i].innerHTML = "Yellow" 
                squares[i].classList.add("Yellow")
                squares[i].classList.add("taken")
                player = "Red"
            }
           
        }
    })
}
// for(let i = 0; i < squares.length; i++){
//     squares[i].addEventListener ("click", () => {
//        if (player !== undefined && squares[i].innerHTML === ""){
//         squares[i].innerHTML = player;
//         console.log(player)
//         if(isAWinner()){    
//             console.log(`${player} has one the game!   `);
//             clearBoard()
//         }
//         if (player === "Red") player = "Yellow";
//         else player = "Red"
//        }
//     })
// }

// for (let i = 0; i < squares.length; i++){
//     squares[i].addEventListener('click', () => {
//         if(allowMove(squares[i])){
//             isAWinner();
//         }
//     })
// }


