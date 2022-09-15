// put each row in a div
// use flexbox to put boxes together
// create eventListener that will change css.style.color -function
// eventListener "hover"^
// create button that will change color selection -function
// create button that will reset the grid -function

let color = 0; 

function createSquare() {

    for (let i = 0; i < 256; i++) {
    let box = document.querySelector(".grid");

    let square = document.createElement("div");
    square.classList.add("square");

    box.appendChild(square); 
    }
    
}

    createSquare(); //makes the squares
   

    

    function playGame() {
    let square = document.querySelectorAll(".square");
    square.forEach(square => {
    square.addEventListener("mouseover", (e)=>{
        square.style.color = "#ff9d00";
    });
   });
}

    playGame(); //colors squares on mouseover


