
const form = document.getElementById("contactForm");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    // Name Validation
    if (name.length < 3) {
        successMessage.style.color = "red";
        successMessage.textContent = "Name must contain at least 3 characters.";
        return;
    }

    // Email Validation
    if (!email.includes("@") || !email.includes(".")) {
        successMessage.style.color = "red";
        successMessage.textContent = "Please enter a valid email.";
        return;
    }

    // Message Validation
    if (message.length < 10) {
        successMessage.style.color = "red";
        successMessage.textContent = "Message must contain at least 10 characters.";
        return;
    }

    // Success
    successMessage.style.color = "green";
    successMessage.textContent = "Your form is submitted successfully!";

    form.reset();

});


const themeBtn = document.getElementById("themeBtn");

// Check saved theme
let savedTheme = localStorage.getItem("theme");

// Apply saved theme
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️ Light Mode";
}

// Button Click
themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀️ Light Mode";

    } else {

        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙 Dark Mode";

    }

});

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {

    navMenu.classList.toggle("active");

});

// Close menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });

});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

});

revealElements.forEach(function(element) {
    observer.observe(element);
});