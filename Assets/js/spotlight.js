/* =========================================================
   spotlight.js - cursor glow on cards (all pages)
   Tracks the pointer over any card and moves a soft light to it.
   Uses event delegation, so cards rendered later also work.
   ========================================================= */
(function () {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const selector = ".project-card, .skill-card, .fact-card, .edu-card, .cert-card, .contact-item";

    document.querySelectorAll(selector).forEach(el => el.classList.add("spot"));

    document.addEventListener("mousemove", e => {
        const card = e.target.closest && e.target.closest(selector);
        if (!card) return;
        card.classList.add("spot");
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left) + "px");
        card.style.setProperty("--my", (e.clientY - r.top) + "px");
    }, { passive: true });
})();
