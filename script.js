// ================================
// HARSH PORTFOLIO
// JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // Smooth navigation
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


    // Reveal sections while scrolling
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
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


    // Current year in footer
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.textContent =
            `© ${new Date().getFullYear()} Harsh — Web Designer`;
    }

});
