/* =========================================================
   header.js - header behaviour (all pages)
   Mobile menu, shadow on scroll, active link highlight.
   ========================================================= */
(function () {
    const header = document.getElementById("header");
    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("menuToggle");

    function closeMenu() {
        if (!navbar) return;
        navbar.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
    }

    if (toggle && navbar) {
        toggle.addEventListener("click", e => {
            e.stopPropagation();
            const open = navbar.classList.toggle("open");
            toggle.classList.toggle("active", open);
            toggle.setAttribute("aria-expanded", String(open));
        });
        navbar.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
        document.addEventListener("click", e => {
            if (!navbar.contains(e.target) && !toggle.contains(e.target)) closeMenu();
        });
    }

    const bar = document.getElementById("scrollProgress");
    window.addEventListener("scroll", () => {
        if (header) header.classList.toggle("scrolled", window.scrollY > 30);
        if (bar) {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        }
    }, { passive: true });
})();
