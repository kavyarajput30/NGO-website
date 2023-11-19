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
let images = [ '3.jpg','5.jpg' , '8.jpg', '9.jpg' ,'10.jpg']; // Add more image URLs
var index = 0;

function changeBackground() {
    firstBox.style.backgroundImage = 'url(' + images[index] + ')';
    index = (index + 1) % images.length;
}

// Initial call
changeBackground();

// Change the background image every 5 seconds
setInterval(changeBackground, 2000);






  
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("tenth-box-first-div");
  
    // Clone images for infinite slider effect
    const images = container.querySelectorAll("img");
    const wrapper = document.createElement("div");
    wrapper.id = "slider-wrapper";
  
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      wrapper.appendChild(clone);
    });
  
    console.log(wrapper); // Add this line to check the content of the wrapper
  
    container.appendChild(wrapper);
  });
  
  