let menuBtn = document.getElementById("menu-btn")
let menuDiv = document.getElementById("menu-div")
let notMenu = document.getElementById("not-menu")

document.addEventListener('DOMContentLoaded', function() {
    menuDiv.classList.add("hide")
    notMenu.classList.remove("hide");
})

menuBtn.addEventListener('click', function() {
    //With transition
    console.log("works")
    menuDiv.classList.remove("hide")
    notMenu.classList.add("hide")
})

