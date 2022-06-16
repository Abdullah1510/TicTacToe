


let audioturn = new Audio("ting.mp3")

let turn = "x"
let gameOver = false;

// function to change the turn
const changTurn = () => {

    return turn === "x" ? "0" : "x"
}
// function to check the win

const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext")

    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach((e) => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText)
            && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + "  won"
            gameOver = true;
        }
    })
}

// Main logic to start
let boxes = document.getElementsByClassName("box");
// console.log(boxes.length);
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    // console.log(boxtext);
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {

            boxtext.innerText = turn;
            turn = changTurn();
            audioturn.play();
            checkWin()
            if (!gameOver) {
                document.querySelector(".info").innerText = "Turn for" + turn
            }
        }
    })

})
// add on click listener button
let reset=document.getElementById("reset")
reset.addEventListener("click",()=>{
    let boxtexts=document.querySelectorAll(".boxtext")
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="x"
    gameOver=false
    document.querySelector(".info").innerText="Turn for"+turn
})