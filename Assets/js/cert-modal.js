/* =========================================================
   cert-modal.js - certificate viewer
   Opens a certificate, with a Show / Hide option and a PDF download.
   ========================================================= */
(function () {
    const modal = document.getElementById("certModal");
    const grid = document.getElementById("certGrid");
    if (!modal || !grid) return;

    const provider = document.getElementById("certProvider");
    const title = document.getElementById("certTitle");
    const desc = document.getElementById("certDesc");
    const image = document.getElementById("certImage");
    const download = document.getElementById("certDownload");
    const toggle = document.getElementById("certToggle");
    const preview = modal.querySelector(".cert-preview");

    function setPreview(show) {
        preview.classList.toggle("open", show);
        toggle.textContent = show ? "Hide Certificate" : "Show Certificate";
    }

    /* Event delegation: works for cards re-rendered by the filters */
    grid.addEventListener("click", e => {
        const button = e.target.closest(".details-btn[data-cert]");
        if (!button) return;

        const cert = window.certificates.find(c => c.id === button.dataset.cert);
        if (!cert) return;

        provider.textContent = cert.provider.toUpperCase() + " CERTIFICATE";
        title.textContent = cert.title;
        desc.textContent = cert.description;
        image.src = "Assets/images/certificates/" + cert.id + ".jpg";
        image.alt = cert.title + " certificate";
        download.href = "Assets/documents/certificates/" + cert.id + ".pdf";
        download.setAttribute("download", cert.id + ".pdf");

        setPreview(false);
        openModal(modal);
    });

    toggle.addEventListener("click", () => setPreview(!preview.classList.contains("open")));
})();
