const button = document.querySelector("button")

let whiteCircle1 = document.querySelector(".circleHalfWhite1")
let whiteCircle2 = document.querySelector(".circleHalfWhite2")
let blackCircle1 = document.querySelector(".circleHalfBlack3")
let blackCircle2 = document.querySelector(".circleHalfBlack4")
let whiteSemiCircle = document.querySelector(".whiteSemiCircle")
let blackSemiCircle = document.querySelector(".blackSemiCircle")

// On click flip yin and yang colors from black to white and vice versa

button.addEventListener("click", () => {

    if (whiteCircle1.style.backgroundColor === "white" ||
        whiteCircle2.style.backgroundColor === "white" ||
        whiteSemiCircle.style.backgroundColor === "white"
    ) {    
        whiteCircle1.style.backgroundColor = "black";
        whiteCircle2.style.backgroundColor = "black";
        whiteSemiCircle.style.backgroundColor = "black"

    } else {
        whiteCircle1.style.backgroundColor = "white";
        whiteCircle2.style.backgroundColor = "white";
        whiteSemiCircle.style.backgroundColor = "white"
    }


    if (blackCircle1.style.backgroundColor === "black" ||
        blackCircle2.style.backgroundColor === "black" ||
        blackSemiCircle.style.backgroundColor === "black"
    ) {
        blackCircle1.style.backgroundColor = "white";
        blackCircle2.style.backgroundColor = "white";
        blackSemiCircle.style.backgroundColor = "white"
    } else {
        blackCircle1.style.backgroundColor = "black";
        blackCircle2.style.backgroundColor = "black";
        blackSemiCircle.style.backgroundColor = "black"
    }

})