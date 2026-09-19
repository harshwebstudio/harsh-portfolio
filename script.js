// ================================
// HARSH PORTFOLIO
// JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // SMOOTH NAVIGATION
    // ================================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // Close mobile menu after clicking a link
                const mobileMenu = document.querySelector(".mobile-menu");

                if (mobileMenu) {
                    mobileMenu.classList.remove("active");
                }

            }

        });

    });


    // ================================
    // MOBILE MENU
    // ================================

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", function () {

            mobileMenu.classList.toggle("active");

        });

    }


    // ================================
    // SCROLL REVEAL
    // ================================

    const sections = document.querySelectorAll(".section");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.05
            }
        );

        sections.forEach(function (section) {
            observer.observe(section);
        });

    } else {

        // Fallback for older browsers
        sections.forEach(function (section) {
            section.classList.add("show");
        });

    }


    // ================================
    // CURRENT YEAR
    // ================================

    const footerText = document.querySelector("footer p");

    if (footerText) {

        footerText.textContent =
            `© ${new Date().getFullYear()} Harsh — Web Designer`;

    }

});
