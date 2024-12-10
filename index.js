const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showNextSlide() {
  // Remove 'active' class from current slide
  carouselItems[currentIndex].classList.remove("active");

  // Update index to the next slide
  currentIndex = (currentIndex + 1) % carouselItems.length;

  // Add 'active' class to the new slide
  carouselItems[currentIndex].classList.add("active");
}

setInterval(showNextSlide, 2500);

// Array of image URLs for the carousel
const images = [
  "Photos/1.jpg",
  "Photos/2.jpg",
  "Photos/3.jpg",
  "Photos/4.jpg",
  "Photos/5.jpg",
  "Photos/6.jpg",
  "Photos/7.jpg",
  "Photos/8.jpg",
  "Photos/9.jpg",
  "Photos/10.jpg",
  "Photos/14.jpg",
  "Photos/15.jpg",
  "Photos/16.jpg",
];

let currentImageIndex = 0; // Start with the first image

// Function to change the image when clicked
document.getElementById("imageToChange").addEventListener("click", function () {
  // Increment the current image index
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Set the new image source based on the updated index
  this.src = images[currentImageIndex];
});
