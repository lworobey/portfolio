// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Carousel functionality
var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("carousel-slide");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from all dots
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Show the current slide and add the active class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Event listeners for opening modals
document.getElementById('openModal1').addEventListener('click', function() {
    openModal('modal1');
});

document.getElementById('openModal2').addEventListener('click', function() {
    openModal('modal2');
});

// Close modals when clicking the close button
var closeButtons = document.getElementsByClassName('close-button');
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
        closeModal(this.closest('.modal').id);
    });
}

// Initialize the first slide and ensure the dots are updated
showSlides(slideIndex);
