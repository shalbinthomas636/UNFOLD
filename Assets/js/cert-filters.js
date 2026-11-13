/* cert-filters.js - provider and "Recent" filter tabs */
(function () {
    const bar = document.getElementById("filterBar");
    if (!bar) return;

    bar.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            renderCerts(this.dataset.filter);
        });
    });
})();
