// ================================
// HARSH PORTFOLIO
// JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // SMOOTH NAVIGATION
    // ================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // ================================
    // SCROLL REVEAL
    // ================================

    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });


    // ================================
    // MOBILE MENU
    // ================================

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
        });


        document.querySelectorAll(".mobile-menu a").forEach(link => {

            link.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
            });

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
