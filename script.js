function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('close-button')) {
        const modalId = event.target.closest('.modal')?.id || event.target.id;
        closeModal(modalId);
    }
});

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

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

document.getElementById('openModal1').addEventListener('click', function() {
    openModal('modal1');
});

document.getElementById('openModal2').addEventListener('click', function() {
    openModal('modal2');
});

var closeButtons = document.getElementsByClassName('close-button');
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
        const modalId = this.closest('.modal').id;
        closeModal(modalId);
    });
}

showSlides(slideIndex);

function openTab(event, tabName) {
    const tabContents = document.getElementsByClassName("tabcontent");
    const tabLinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");

    const activeTabProgressBars = document.getElementById(tabName).getElementsByClassName("progress-bar");
    for (let bar of activeTabProgressBars) {
        if (bar.style.width === "0%") {
            const targetWidth = bar.getAttribute("style").match(/width:\s*(\d+)%/)[1]; 
            setTimeout(() => {
                bar.style.transition = "width 0.5s ease-in-out"; 
                bar.style.width = targetWidth + "%"; 
            }, 100);
        }
    }
}

function validateForm() {
    document.getElementById("name-error").style.display = "none";
    document.getElementById("email-error").style.display = "none";
    document.getElementById("message-error").style.display = "none";
    document.getElementById("success-message").style.display = "none";

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    let valid = true;

    if (name.trim() === "") {
        document.getElementById("name-error").textContent = "Name is required.";
        document.getElementById("name-error").style.display = "block";
        valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent = "Please enter a valid email address.";
        document.getElementById("email-error").style.display = "block";
        valid = false;
    }

    if (message.trim() === "") {
        document.getElementById("message-error").textContent = "Message is required.";
        document.getElementById("message-error").style.display = "block";
        valid = false;
    }

    if (valid) {
        document.getElementById("success-message").textContent = "Your message has been sent successfully!";
        document.getElementById("success-message").style.display = "block";
    }

    return valid;
}
