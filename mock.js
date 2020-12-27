// Font Button
function increasefont() {
    const two = document.getElementById("li__two");
    two.classList.toggle("incrementfont");
}

// Border Button
function increaseborder() {
    const two = document.getElementById("li__two");
    two.classList.toggle("incrementborder");
}

// Animations
function animations() {
    const two = document.getElementById("li__two");
    two.classList.toggle("animations");
}

// Color
function changecolor() {
    const two = document.getElementById("li__two")
    two.classList.toggle("changecolor")
}

//Date
function newDate() {
    const two = document.getElementById("li__two")
    two.innerHTML = new Date().getDate()
}

// Background
function changebackground() {
    const selectdiv = document.getElementById("mainhead")
    selectdiv.classList.toggle("backgroundchange")
}

// Background
function dimensions() {
    const selectdiv = document.getElementById("mainhead")
    selectdiv.classList.toggle("dimensionschanged")
}

// Text Shadow

function textshadow() {
    const selectdiv = document.getElementById("li__two")
    selectdiv.classList.toggle("shadowing")
}