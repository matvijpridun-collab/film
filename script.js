// ================================
// HEADER ON SCROLL
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ================================
// SCROLL ANIMATIONS
// ================================

const animatedElements = document.querySelectorAll(
    ".section, .cta"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach((element) => {
    observer.observe(element);
});


// ================================
// MOVIE BUTTONS
// ================================

const plusButtons = document.querySelectorAll(".plus-btn");

plusButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        button.classList.toggle("active");

        if (button.classList.contains("active")) {

            button.textContent = "✓";

            button.style.background = "#ff3d00";
            button.style.borderColor = "#ff3d00";
            button.style.color = "#fff";

        } else {

            button.textContent = "+";

            button.style.background = "";
            button.style.borderColor = "";
            button.style.color = "";

        }

    });

});


// ================================
// MOBILE MENU
// ================================

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

});


// ================================
// CLOSE MOBILE MENU
// ================================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

    });

});


// ================================
// MOVIE CARD HOVER
// ================================

const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-5px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});