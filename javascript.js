// put each row in a div
// use flexbox to put boxes together
// create eventListener that will change css.style.color -function
// eventListener "hover"^
// create button that will change color selection -function

let color = 0; 

function createSquare() {

    for (let i = 0; i < 16; i++) {
    let box = document.querySelector(".grid");

    let square = document.createElement("div");
    square.classList.add("square");

    box.appendChild(square); 
    }
    
}

    createSquare(); //makes the squares
   



    function playGame() {
    
    let square = document.querySelector(".square");


    square.addEventListener("mouseover", changeColor);
    
}

    playGame();


function changeColor() {
    
    let hello = document.querySelectorAll(".square");

    for (let i = 0; i < hello.length; i++){
    hello[i].style.color = "blue";
    }
}

