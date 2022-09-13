let color = 0; 

function createSquare() {
    let box = document.querySelector("grid")

    let square = document.createElement("div");
    square.setAttribute("square");
    
    box.appendChild(square); 
}

createSquare();