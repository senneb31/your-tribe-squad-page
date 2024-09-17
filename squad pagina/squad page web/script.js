// Array of image paths or URLs
const images = [
    'personal-photo.png',
    'profileCard.png',
    '2de-pagina-laptopview.jpeg.png',
    '2de-pagina-mobileview.jpeg'
];

let currentIndex = 0;

// Get the main photo element
const mainPhoto = document.getElementById('main-photo');

// Function to update the image
function updateImage(index) {
    mainPhoto.src = images[index];
}

// Next button click event
document.getElementById('next').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    updateImage(currentIndex);
});

// Previous button click event
document.getElementById('prev').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image if needed
    updateImage(currentIndex);
});
