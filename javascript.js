// put each row in a div
// use flexbox to put boxes together
// create eventListener that will change css.style.color -function
// eventListener "hover"^
//create button that will change color selection -function

let color = 0; 

function createSquare() {
    let box = document.querySelector(".grid")

    let square = document.createElement("div");
    square.classList.add("square");

    box.appendChild(square); 
}

createSquare();