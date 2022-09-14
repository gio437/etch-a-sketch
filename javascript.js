// put each row in a div
// use flexbox to put boxes together
// create eventListener that will change css.style.color -function
// eventListener "hover"^
// create button that will change color selection -function

let color = 0; 

function createSquare() {
    let box = document.querySelector(".grid");

    let square = document.createElement("div");
    square.classList.add("square");

    box.appendChild(square); 
    
}

createSquare();
   //makes the squares
    //makes hover function


    let square = document.querySelector(".square");
    square.addEventListener("mouseover", changeColor);


function changeColor() {
    let hello = document.querySelector(".square");
    hello.style.color = "blue";

}

