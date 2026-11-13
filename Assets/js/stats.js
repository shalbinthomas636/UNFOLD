/* =========================================================
   stats.js - count-up numbers
   Counts whole numbers up when they scroll into view.
   Used by the front-page stats strip and the education
   and certificate page highlights.
   ========================================================= */
(function () {
    const numbers = document.querySelectorAll(".stat strong, .hero-stats strong");

    function countUp(el) {
        const target = parseInt(el.textContent, 10);
        if (isNaN(target) || !/^\d+$/.test(el.textContent.trim())) return;

        const duration = 1200;
        const start = performance.now();
        el.textContent = "0";

        function step(now) {
            const p = Math.min((now - start) / duration, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    numbers.forEach(n => observer.observe(n));
})();
