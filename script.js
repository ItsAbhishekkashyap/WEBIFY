const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slideIndex = 0;

function showSlide(n) {
    const slides = slider.querySelectorAll('img');
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    showSlide(++slideIndex);
}

function prevSlide() {
    showSlide(--slideIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(slideIndex);

// Gallery code *********************************************************************************************************************


const image1 = document.getElementById('image1');
const image1Paths = ['1.jpeg', '5.png', '4.png', '3.jpg', 'mirage2.png']; // Add more image paths as needed
let currentindex = 0;

function changeImage1() {
    currentindex = (currentindex + 1) % image1Paths.length;
    image1.src = image1Paths[currentindex];
}

setInterval(changeImage1, 5000); // Change image every 5 seconds (5000 milliseconds)

const image2 = document.getElementById('image2');
const image2Paths = [ '6.png','mirage2.png', '1.jpeg', '5.png', '4.png']; // Add more image paths as needed
let currenTIndex = 0;

function changeImage2() {
    currenTIndex = (currenTIndex + 1) % image2Paths.length;
    image2.src = image2Paths[currenTIndex];
}

setInterval(changeImage2, 5000); // Change image every 5 seconds (5000 milliseconds)




const image3 = document.getElementById('image3');
const image3Paths = ['3.jpg', 'civista 2023.png', 'governer.png', 'flag.png', '1.jpeg']; // Add more image paths as needed
let currentIndex = 0;

function changeImage3() {
    currentIndex = (currentIndex + 1) % image3Paths.length;
    image3.src = image3Paths[currentIndex];
}

setInterval(changeImage3, 5000); // Change image every 5 seconds (5000 milliseconds)


const image4 = document.getElementById('image4');
const image4Paths = ['yoga.png', 'singing.png', 'dance.png', 'yoga2.png', 'Advent.png']; // Add more image paths as needed
let CurrentIndex = 0;

function changeImage4() {
    CurrentIndex = (CurrentIndex + 1) % image4Paths.length;
    image4.src = image4Paths[CurrentIndex];
}

setInterval(changeImage4, 5000); // Change image every 5 seconds (5000 milliseconds)




const image5 = document.getElementById('image5');
const image5Paths = ['civista 2023.png', 'governer.png', '3.jpg', '4.png', 'mirage2.png']; // Add more image paths as needed
let currentindeX = 0;

function changeImage5() {
    currentindeX = (currentindeX + 1) % image5Paths.length;
    image5.src = image5Paths[currentindeX];
}

setInterval(changeImage5, 5000); // Change image every 5 seconds (5000 milliseconds)