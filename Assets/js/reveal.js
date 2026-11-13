/* =========================================================
   reveal.js - shared helper
   Fades in elements as they scroll into view.
   Used by every section script through revealWithin().
   ========================================================= */
(function () {
    const observer = ("IntersectionObserver" in window)
        ? new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 })
        : null;

    /* revealWithin(".card") - animates every matching element in the page */
    window.revealWithin = function (selector) {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.classList.add("reveal");
            el.style.transitionDelay = (i % 3) * 80 + "ms";
            if (observer) observer.observe(el);
            else el.classList.add("visible");
        });
    };
})();
