/* =========================================================
   modal.js - shared modal helper
   openModal / closeModal, backdrop click, close button, Escape key.
   Used by project, education and certificate modals.
   ========================================================= */
window.openModal = function (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
};

window.closeModal = function (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
};

document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", e => { if (e.target === modal) closeModal(modal); });
    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.addEventListener("click", () => closeModal(modal));
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") document.querySelectorAll(".modal.active").forEach(closeModal);
});
