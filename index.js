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
    alert('Redirecting to contact.html')
    window.location.href = "./contact/contact.html"
})

installBtn.addEventListener('click', function() {
    alert('Redirecting to install.html')
    window.location.href = "./install/install.html"
})
