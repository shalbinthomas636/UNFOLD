/* =========================================================
   hero.js - hero section
   1. Typing effect on the tagline (cycles through phrases)
   2. Gentle parallax on the profile photo with the mouse
   Both are skipped when reduced motion is requested.
   ========================================================= */
(function () {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* 1. Typing effect */
    const typed = document.getElementById("typedText");
    if (typed && !reduce) {
        const words = JSON.parse(typed.dataset.words || "[]");
        let w = 0, c = 0, deleting = false;

        function tick() {
            const word = words[w];
            c += deleting ? -1 : 1;
            typed.textContent = word.slice(0, c);

            let delay = deleting ? 35 : 75;
            if (!deleting && c === word.length) { delay = 2200; deleting = true; }
            else if (deleting && c === 0) {
                deleting = false;
                w = (w + 1) % words.length;
                delay = 400;
            }
            setTimeout(tick, delay);
        }
        typed.textContent = "";
        c = 0;
        setTimeout(tick, 500);
    }

    /* 2. Photo parallax */
    const visual = document.querySelector(".hero-visual");
    if (!visual || reduce || !window.matchMedia("(pointer: fine)").matches) return;

    const photo = visual.querySelector(".profile-img");
    if (!photo) return;
    photo.style.transition = "transform 0.4s ease";

    visual.addEventListener("mousemove", e => {
        const r = visual.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        photo.style.transform = `translate(${x * -14}px, ${y * -10}px)`;
    });
    visual.addEventListener("mouseleave", () => {
        photo.style.transform = "translate(0, 0)";
    });
})();
