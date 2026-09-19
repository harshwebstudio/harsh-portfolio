// ================================
// HARSH PORTFOLIO
// JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // MOBILE MENU
    // ================================

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuToggle && mobileMenu) {

        menuToggle.onclick = function () {
            mobileMenu.classList.toggle("active");
        };

    }


    // ================================
    // NAVIGATION
    // ================================

    const navLinks = document.querySelectorAll(
        '.navbar a[href^="#"], .mobile-menu a[href^="#"], footer a[href^="#"]'
    );

    navLinks.forEach(function (link) {

        link.onclick = function (event) {

            const href = link.getAttribute("href");

            if (!href || href === "#") {
                return;
            }

            const target = document.querySelector(href);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                if (mobileMenu) {
                    mobileMenu.classList.remove("active");
                }

            }

        };

    });


    // ================================
    // SECTION VISIBILITY
    // ================================

    document.querySelectorAll(".section").forEach(function (section) {
        section.classList.add("show");
    });


    // ================================
    // CURRENT YEAR
    // ================================

    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.textContent =
            "© " + new Date().getFullYear() + " Harsh — Web Designer";
    }

});
