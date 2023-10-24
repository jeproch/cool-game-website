let menuBtn = document.getElementById("menu-btn")
let menuDiv = document.getElementById("menu-div")
let notMenu = document.getElementById("not-menu")

document.addEventListener('DOMContentLoaded', function() {
    menuDiv.classList.add("hide")
    notMenu.classList.remove("hide");
})

menuBtn.addEventListener('click', function() {
    //With transition
    menuDiv.classList.remove("hide")
    notMenu.classList.add("hide")
})

const paragraph = document.getElementById('paragraph');
const paragraph2 = document.getElementById('paragraph-2');
const paragraph3 = document.getElementById('paragraph-3');

function addHoverClass(element) {
    element.classList.add('hover-paragraph');
    // Remove the not-hovering class when hovering
    element.classList.remove('not-hovering-paragraph');
}

function addNotHoverClass(element) {
    element.classList.add('not-hovering-paragraph');
    // Remove the hover class when not hovering
    element.classList.remove('hover-paragraph');
}

function removeHoverClass(element) {
    element.classList.remove('hover-paragraph');
    // Add a class that triggers the removal transition
    element.classList.add('remove-transition');
    // After the transition duration, remove the transition class
    setTimeout(() => {
        element.classList.remove('remove-transition');
    }, 300); // 300ms matches the transition duration
}

//For menu 

let goHomeBTN = document.getElementById('home-from-menu-btn')

goHomeBTN.addEventListener('click', function() {
  //Write here a function to show the main page
  menuDiv.classList.remove("hide")
  notMenu.classList.add("hide")
})