// script.js

// ======== MOBILE MENU TOGGLE ========
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
});

// ======== SMOOTH SCROLLING ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
        navLinks.classList.remove("active");
        menuToggle.classList.remove("open");
    });
});

// ======== PROJECT FILTER (optional) ========
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;

        projects.forEach(project => {
            if (category === "all" || project.classList.contains(category)) {
                project.style.display = "block";
                setTimeout(() => project.classList.add("show"), 50);
            } else {
                project.classList.remove("show");
                setTimeout(() => project.style.display = "none", 300);
            }
        });
    });
});
