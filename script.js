let nav =document.getElementById("nav-main-box");
window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        // Add the scrolled style
        nav.style.backgroundColor = "#FFD099";
    } else {
        // Remove the scrolled style
        nav.style.backgroundColor = "transparent";
    }
});



let firstBox = document.getElementById("first-box");
let images = ['1.jpeg', '2.jpg' ,'3.jpg']; // Add more image URLs
var index = 0;

function changeBackground() {
    firstBox.style.backgroundImage = 'url(' + images[index] + ')';
    index = (index + 1) % images.length;
}

// Initial call
changeBackground();

// Change the background image every 5 seconds
setInterval(changeBackground, 3000);