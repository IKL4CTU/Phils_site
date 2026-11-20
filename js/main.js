
// ========================================
// PHILIP NATHANAEL
// Global JavaScript
// GJP Web Design & Development
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // Mobile navigation

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".site-nav");

    if (menuToggle && navigation) {

        function closeMenu() {
            navigation.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }

        menuToggle.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

    }

    // Automatic copyright year

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
