/* =========================================================
   HAVEN WEBSITE — SCRIPT.JS
   PART 1
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
       ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");

            const isOpen = navMenu.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.innerHTML = isOpen ? "✕" : "☰";
        });

        /* Close menu after clicking a link */

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.innerHTML = "☰";
            });
        });
    }


    /* =========================
       PAGE LOADER
       ========================= */

    const loader = document.querySelector(".page-loader");

    if (loader) {
        window.addEventListener("load", () => {

            setTimeout(() => {
                loader.classList.add("hide");
            }, 500);

        });
    }


    /* =========================
       NAVBAR SCROLL EFFECT
       ========================= */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =========================
       SMOOTH SCROLL
       ========================= */

    const smoothLinks = document.querySelectorAll('a[href^="#"]');

    smoothLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});
/* =========================================================
   HAVEN WEBSITE — SCRIPT.JS
   PART 2
   ========================================================= */


/* =========================
   SCROLL REVEAL ANIMATION
   ========================= */

const revealElements = document.querySelectorAll(
    ".reveal, .service-card, .project-card, .pricing-card, .process-card, .about-card"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("active");
    });

}


/* =========================
   STAGGER CARD ANIMATION
   ========================= */

const cardGroups = [
    ".services-grid .service-card",
    ".projects-grid .project-card",
    ".pricing-grid .pricing-card",
    ".process-grid .process-card"
];

cardGroups.forEach(selector => {

    const cards = document.querySelectorAll(selector);

    cards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 80}ms`;

    });

});


/* =========================
   CLOSE MENU WITH ESCAPE
   ========================= */

document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;

    const navMenu = document.querySelector(".nav-menu");
    const menuToggle = document.querySelector(".menu-toggle");

    if (!navMenu) return;

    navMenu.classList.remove("active");

    if (menuToggle) {

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = "☰";

    }

});


/* =========================
   PREVENT BROKEN IMAGE LOOK
   ========================= */

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("error", () => {

        image.style.opacity = "0";

    });

});


/* =========================
   CURRENT YEAR
   ========================= */

const yearElement = document.querySelector("#current-year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================
   PAGE READY
   ========================= */

document.documentElement.classList.add("js-ready");
