/* =========================================================
   projects.js - Projects section
   Project details and the "View Details" modal on the front page.
   ========================================================= */
const projectData = {
    medicine: {
        kicker: "ONGOING PROJECT",
        title: "Medicine Reminder App",
        tags: ["PHP", "Laravel"],
        description: "A web application that helps patients and caregivers manage their medication schedules and improve adherence through automated reminders. The platform is being extended with an AI-based recommendation engine and an in-app chatbot that give personalised health suggestions and answer patient queries.",
        points: [
            "Automated reminders that keep patients and caregivers on schedule.",
            "AI-based recommendation engine for personalised health suggestions.",
            "In-app chatbot to assist patients with everyday queries.",
            "Doctor consultation module where prescriptions are issued online and reminders are generated automatically.",
            "User-friendly dashboard for tracking medication activity."
        ]
    },
    medmobil: {
        kicker: "COMPLETED PROJECT",
        title: "MedMobil - Ambulance Management System",
        tags: ["Django", "MySQL"],
        description: "A full-stack ambulance booking and management system that supports both emergency and non-emergency requests. It includes recurring, pre-scheduled bookings for patients with ongoing needs, such as regular dialysis visits, and a clear role structure for every stakeholder.",
        points: [
            "Supports emergency and non-emergency bookings, including recurring pre-scheduled trips.",
            "Three-tier stakeholder system: Admin, User and Ambulance Driver, each with a dedicated dashboard.",
            "Automated driver allocation that reduced manual coordination effort by 50%.",
            "Real-time booking status tracking for faster response.",
            "Normalised MySQL schema for bookings, drivers and patient records."
        ]
    },
    drivemate: {
        kicker: "COMPLETED PROJECT",
        title: "DriveMate - Online Car Rental System",
        tags: ["PHP", "MySQL", "JavaScript", "HTML"],
        description: "A car rental platform where customers can book a vehicle with a driver or in self-drive mode. The system manages three roles, Admin, Driver and User, and keeps vehicle availability and bookings current in real time.",
        points: [
            "Customers can browse vehicles, choose a rental mode and track their bookings.",
            "Admin panel to manage vehicle inventory, approve driver registrations and monitor bookings.",
            "Driver module to accept or decline ride requests and update availability in real time.",
            "Normalised MySQL database for vehicles, bookings and customer records."
        ]
    }
};

(function () {
    const modal = document.getElementById("projectModal");
    if (!modal) return;

    const kicker = document.getElementById("modalKicker");
    const title = document.getElementById("modalTitle");
    const tags = document.getElementById("modalTags");
    const desc = document.getElementById("modalDesc");
    const points = document.getElementById("modalPoints");

    document.querySelectorAll(".details-btn[data-project]").forEach(button => {
        button.addEventListener("click", function () {
            const data = projectData[this.dataset.project];
            if (!data) return;
            kicker.textContent = data.kicker;
            title.textContent = data.title;
            tags.innerHTML = data.tags.map(t => `<span>${t}</span>`).join("");
            desc.textContent = data.description;
            points.innerHTML = data.points.map(p => `<li>${p}</li>`).join("");
            openModal(modal);
        });
    });

    revealWithin("#projects .project-card");
})();
