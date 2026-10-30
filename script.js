
// Wait until the HTML page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // 1. Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // 2. Welcome message in console
    console.log("Welcome to Raghavendra's Portfolio!");

    
    // 3. Footer year automatically updates
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.textContent =
            "© " + new Date().getFullYear() +
            " Raghavendra | All Rights Reserved";
    }


    // 4. Project card hover animation
    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "translateY(0)";
        });

    });

});
