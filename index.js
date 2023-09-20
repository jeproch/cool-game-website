document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded')
})

//All elements

let contactBtn = document.getElementById("contact-btn")
let installBtn = document.getElementById("install-btn")
let communityBtn = document.getElementById("community-btn")
let supportBtn = document.getElementById("support-btn")

// procedures/functions

contactBtn.addEventListener('click', function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUVbmV2ZXIgZ29ubmEgZ2l2ZSB1IHVw"
    // window.location.href = ""
})

installBtn.addEventListener('click', function() {
    window.location.href = "./install/install.html"
})
