/* =========================================================
   cert-modal.js - certificate viewer
   Opens a certificate, with a Show / Hide option and a PDF download.
   Certificates that have no PDF file get neither option.
   ========================================================= */
(function () {
    const modal = document.getElementById("certModal");
    const grid = document.getElementById("certGrid");
    if (!modal || !grid) return;

    const provider = document.getElementById("certProvider");
    const title = document.getElementById("certTitle");
    const desc = document.getElementById("certDesc");
    const frame = document.getElementById("certFrame");
    const download = document.getElementById("certDownload");
    const toggle = document.getElementById("certToggle");
    const preview = modal.querySelector(".cert-preview");

    let currentSrc = "";

    function setPreview(show) {
        preview.classList.toggle("open", show);
        toggle.textContent = show ? "Hide Certificate" : "Show Certificate";
        /* load the PDF only when it is actually shown */
        if (show && frame.getAttribute("src") !== currentSrc) frame.src = currentSrc;
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
        frame.removeAttribute("src");
        frame.title = cert.title + " certificate";

        const hasPdf = Boolean(cert.pdf);
        toggle.style.display = hasPdf ? "" : "none";
        download.style.display = hasPdf ? "" : "none";

        if (hasPdf) {
            currentSrc = "Assets/documents/certificates/" + encodeURIComponent(cert.pdf) + "#toolbar=0&navpanes=0&view=FitH";
            download.href = "Assets/documents/certificates/" + encodeURIComponent(cert.pdf);
            download.setAttribute("download", cert.pdf);
        } else {
            currentSrc = "";
            download.removeAttribute("href");
        }

        setPreview(false);
        openModal(modal);
    });

    toggle.addEventListener("click", () => setPreview(!preview.classList.contains("open")));
})();
