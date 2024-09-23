// Array of image paths or URLs
const images = [
    'Foto-iedereen-squad/Squad1H-Yamen (1).JPG',
    'Foto-iedereen-squad/Squad1H-Anouar.JPG',
    'Foto-iedereen-squad/Squad1H-Anouk.JPG',
    'Foto-iedereen-squad/Squad1H-Aria.JPG',
    'Foto-iedereen-squad/Squad1H-Arman.JPG',
    'Foto-iedereen-squad/Squad1H-Daan.JPG',
    'Foto-iedereen-squad/Squad1H-Finn (5).JPG',
    'Foto-iedereen-squad/Squad1H-kai.JPG',
    'Foto-iedereen-squad/Squad1H-Kate.JPG',
    'Foto-iedereen-squad/Squad1H-Kerem.JPG',
    'Foto-iedereen-squad/Squad1H-Kyan (1).JPG',
'Foto-iedereen-squad/Squad1H-Luuk.JPG', 
'Foto-iedereen-squad/Squad1H-Marije.JPG', 
'Foto-iedereen-squad/Squad1H-Miel.JPG',
'Foto-iedereen-squad/Squad1H-Mkiyas.JPG', 
'Foto-iedereen-squad/Squad1H-Nawal.JPG',
'Foto-iedereen-squad/Squad1H-Nayome.JPG', 
'Foto-iedereen-squad/Squad1H-Rapha.JPG',
'Foto-iedereen-squad/Squad1H-Renzo.JPG',
'Foto-iedereen-squad/Squad1H-Reyhan (1).JPG',
'Foto-iedereen-squad/Squad1H-Rick (1).JPG',
'Foto-iedereen-squad/Squad1H-Riley.JPG',
'Foto-iedereen-squad/Squad1H-Safoe.JPG',
'Foto-iedereen-squad/Squad1H-Sascha.JPG',
'Foto-iedereen-squad/Squad1H-Sebastiaan.JPG', 
'Foto-iedereen-squad/Squad1H-Senne (1).JPG', 
'Foto-iedereen-squad/Squad1H-Sidney.JPG',
'Foto-iedereen-squad/Squad1H-Sjors.JPG', 
'Foto-iedereen-squad/Squad1H-Stella.JPG', 
'Foto-iedereen-squad/Squad1H-Suleyman.JPG', 
'Foto-iedereen-squad/Squad1H-Tessa.JPG', 
, 






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


