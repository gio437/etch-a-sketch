// put each row in a div
// use flexbox to put boxes together
// create eventListener that will change css.style.color -function
// eventListener "hover"^
// create button that will change color selection -function
// create button that will reset the grid -function
// use variable for extra credit -var

color = 0; //maybe add functionality to allow it  to remember the color after reset?

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
    color = 1;

    let square = document.querySelectorAll(".square");
    square.forEach(square => {
    square.addEventListener("mouseover", (e)=>{
        square.style.background = "#ff9d00";
    });
   });
}

let press3 = document.querySelector(".orange");
press3.addEventListener("click", playGame);  //colors squares on mouseover

// create arrow function to remove querySelector all .square -function
// use loop right under to add .square back to the DOM -function


let press = document.querySelector(".reset");
press.addEventListener("click", changeSquares);


function changeSquares() {
    let amount = window.prompt();
    let user = 300 / amount;

    let box = document.querySelectorAll(".square");
    
    
    if (amount <= 100){
    for (let i = 0; i < box.length; i++) {
        box[i].remove();
}
    
    for (let i = 0; i < amount * amount; i++) {
        let grid = document.querySelector(".grid");

        let square = document.createElement("div");
        square.classList.add("square");
       
        box.forEach((e) => {
            square.style.height = user.toString() + "px";
            square.style.width = user.toString() + "px";
        });
        
        grid.appendChild(square); 

    }
    if (color == 1) {
        playGame();
    }
    else if (color == 2) {
        createRainbow();
    }
    }
}


//Extra Credit

let press2 = document.querySelector(".rainbow");
press2.addEventListener("click", createRainbow);


function createRainbow() {
    color = 2;

    let colorful = document.querySelectorAll(".square");
    colorful.forEach(colorful => {
        colorful.addEventListener("mouseover", (e)=>{
        colorful.style.background = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    });
   });
}

