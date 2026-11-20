
// ==================================
// 1. CONTACT FORM + EMAILJS
// ==================================

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async function(event) {

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

    // Sending Email
    successMessage.style.color = "blue";
    successMessage.textContent = "Sending message...";

    try {

        await emailjs.send(
            "service_tg8te2n",
            "template_gn1yrgb",
            {
                name: name,
                email: email,
                message: message
            },
            {
                publicKey: "hOehj45jOVhQXFoBX"
            }
        );

        successMessage.style.color = "green";
        successMessage.textContent = "Your message has been sent successfully!";

        form.reset();

    } catch (error) {

        successMessage.style.color = "red";
        successMessage.textContent = "Message could not be sent. Please try again.";

        console.log("EmailJS Error:", error);

    }

});


// ==================================
// 2. DARK MODE
// ==================================

const themeBtn = document.getElementById("themeBtn");

// Check saved theme
let savedTheme = localStorage.getItem("theme");

// Apply saved theme
if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️ Light Mode";

}

// Dark Mode Button Click
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


// ==================================
// 3. MOBILE HAMBURGER MENU
// ==================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Open and Close Menu
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


// ==================================
// 4. SCROLL REVEAL ANIMATION
// ==================================

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
