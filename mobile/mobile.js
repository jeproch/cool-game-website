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


//only for first paragraph!!

// Get a reference to the element you want to add the class to
const paragraph = document.getElementById('paragraph');

// Add a touchstart event listener to detect when the user taps on the element
paragraph.addEventListener('touchstart', function(event) {
    // Prevent the default touchstart behavior (e.g., scrolling)
    event.preventDefault();

    // Add the CSS class when the user taps on the paragraph
    paragraph.classList.add('hover-paragraph');
});

// Add a touchend event listener to detect when the user stops touching the paragraph
paragraph.addEventListener('touchend', function(event) {
    // Remove the CSS class when the user stops touching the paragraph
    paragraph.classList.remove('hover-paragraph');
});

//only for first paragraph!!