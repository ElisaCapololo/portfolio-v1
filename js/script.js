document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggleButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        toggleButton.querySelectorAll(".bar").forEach((bar) => {
            bar.classList.toggle("open");
        });
    });
});
