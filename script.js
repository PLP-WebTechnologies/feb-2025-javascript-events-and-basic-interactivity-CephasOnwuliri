// Event Handling
document.getElementById("change-text-btn").addEventListener("click", function () {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = "#4caf50";
});

document.getElementById("hover-text").addEventListener("mouseover", function () {
    this.textContent = "You're hovering over me!";
});

document.getElementById("hover-text").addEventListener("mouseout", function () {
    this.textContent = "Hover over me!";
});

document.getElementById("keypress-input").addEventListener("keyup", function (event) {
    document.getElementById("keypress-output").textContent = `You typed: ${event.target.value}`;
});

document.getElementById("secret-btn").addEventListener("dblclick", function () {
    alert("Double-click detected! 🎉");
});

// Interactive Elements
const galleryImages = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300/ff0000",
    "https://via.placeholder.com/300/00ff00",
    "https://via.placeholder.com/300/0000ff",
];
let currentImgIndex = 0;

document.getElementById("next-img-btn").addEventListener("click", function () {
    currentImgIndex = (currentImgIndex + 1) % galleryImages.length;
    document.getElementById("gallery-img").src = galleryImages[currentImgIndex];
});

// Tabs
document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".tab-content").forEach((content) => {
            content.classList.remove("active");
        });
        const target = document.getElementById(this.getAttribute("data-tab"));
        target.classList.add("active");
    });
});

// Form Validation
document.getElementById("email").addEventListener("input", function () {
    const feedback = document.getElementById("email-feedback");
    feedback.textContent = this.validity.valid ? "" : "Invalid email format.";
});

document.getElementById("password").addEventListener("input", function () {
    const feedback = document.getElementById("password-feedback");
    feedback.textContent = this.value.length >= 8 ? "" : "Password must be at least 8 characters.";
});

document.getElementById("form").addEventListener("submit", function (event) {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if (!email.validity.valid || password.value.length < 8) {
        event.preventDefault();
        alert("Please fix the form errors before submitting.");
    }
});
