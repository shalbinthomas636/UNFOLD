/* footer.js - copyright year and the back-to-top button (all pages) */
document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
});

(function () {
    const btn = document.getElementById("backTop");
    if (!btn) return;
    window.addEventListener("scroll", () => {
        btn.classList.toggle("show", window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener("click", e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
})();
