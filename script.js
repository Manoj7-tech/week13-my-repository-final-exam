document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE MENU
       ========================================== */
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        };

        document.querySelectorAll(".navbar a").forEach(link => {
            link.onclick = () => {
                menuIcon.classList.remove("bx-x");
                navbar.classList.remove("active");
            };
        });
    }

    /* ==========================================
       HOBBY DESCRIPTION TOGGLE
       ========================================== */
    const hobbyButtons = document.querySelectorAll(".hobby-btn");

    hobbyButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const card = button.closest(".project-card");
            const paragraph = card.querySelector("p");

            paragraph.classList.toggle("show-text");

            if (paragraph.classList.contains("show-text")) {
                button.textContent = "Hide Hobby";
            } else {
                button.textContent = "Review My Hobbies";
            }
        });
    });

});