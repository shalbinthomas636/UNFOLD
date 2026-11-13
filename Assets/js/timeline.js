/* =========================================================
   timeline.js - Education timeline
   Education details and the "View Details" modal.
   ========================================================= */
const educationData = {
    mca: {
        kicker: "CURRENTLY PURSUING",
        title: "Master of Computer Application (MCA)",
        institution: "Santhigiri College of Computer Sciences, Vazhithala",
        meta: ["Aug 2025 - Mar 2027", "CGPA 8.12 / 10"],
        description: "I am currently pursuing my Master of Computer Application at Santhigiri College of Computer Sciences. The programme deepens my understanding of software engineering, database design and web technologies, and gives me the chance to apply them in practical projects such as the Medicine Reminder App. I am focused on building strong problem-solving skills and preparing for a professional role in the IT industry."
    },
    bca: {
        kicker: "COMPLETED",
        title: "Bachelor of Computer Application (BCA)",
        institution: "Santhigiri College of Computer Sciences, Vazhithala",
        meta: ["Sep 2022 - Mar 2025", "CGPA 7.21 / 10"],
        description: "I completed my Bachelor of Computer Application at Santhigiri College of Computer Sciences. The course gave me a solid foundation in programming, computer systems and database management. It was here that I began building real applications, which led to my first full-stack projects and a steady interest in web development."
    },
    hss: {
        kicker: "COMPLETED",
        title: "Higher Secondary Education",
        institution: "St. Augustine's HSS, Karimkunnam",
        meta: ["Jun 2020 - Mar 2022", "Score 80%"],
        description: "I completed my higher secondary education at St. Augustine's HSS, Karimkunnam, with a score of 80%. This stage strengthened my academic foundation and built the discipline and confidence I needed for higher studies in computer applications."
    },
    hs: {
        kicker: "COMPLETED",
        title: "High School Education",
        institution: "St. John's HS, Kurumannu",
        meta: ["Jun 2019 - Mar 2020", "Score 88%"],
        description: "I completed my high school education at St. John's HS, Kurumannu, with a score of 88%. My school years developed the core habits of learning, teamwork and communication that continue to support my studies today."
    }
};

(function () {
    revealWithin(".edu-card");

    const modal = document.getElementById("eduModal");
    if (!modal) return;

    const kicker = document.getElementById("eduKicker");
    const title = document.getElementById("eduTitle");
    const inst = document.getElementById("eduInst");
    const meta = document.getElementById("eduMeta");
    const desc = document.getElementById("eduDesc");

    document.querySelectorAll(".details-btn[data-edu]").forEach(button => {
        button.addEventListener("click", function () {
            const data = educationData[this.dataset.edu];
            if (!data) return;
            kicker.textContent = data.kicker;
            title.textContent = data.title;
            inst.textContent = data.institution;
            meta.innerHTML = data.meta.map(m => `<span>${m}</span>`).join("");
            desc.textContent = data.description;
            openModal(modal);
        });
    });
})();
