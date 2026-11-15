/* =========================================================
   cert-grid.js - Certificates grid
   Holds the certificate data and renders the cards.
   Other certificate scripts use window.certificates and
   window.renderCerts().
   ========================================================= */
/* pdf = file name inside Assets/documents/certificates/.
   A certificate with no pdf shows no Show Certificate / Download option. */
window.certificates = [
    { id: "nptel-introduction-to-iot", pdf: "IOT-NPTEL.pdf", title: "Introduction to Internet of Things", provider: "NPTEL", recent: true, icon: "IoT",
      description: "An NPTEL online course covering the architecture of Internet of Things systems, sensing and communication technologies, and the principles of connecting devices to build intelligent applications." },
    { id: "nptel-introduction-to-os", pdf: "OS-NPTEL.pdf", title: "Introduction to Operating Systems", provider: "NPTEL", recent: true, icon: "OS",
      description: "An NPTEL online course on operating system fundamentals, including process management, scheduling, memory management, file systems and concurrency." },
    { id: "nptel-cloud-computing", pdf: "Cloud Computing-Nptel.pdf", title: "Cloud Computing", provider: "NPTEL", recent: false, icon: "CC",
      description: "An NPTEL online course introducing cloud computing models, virtualisation, service delivery models and the architecture behind scalable cloud platforms." },
    { id: "nptel-programming-in-java", pdf: "Java-NPTEL.pdf", title: "Programming in Java", provider: "NPTEL", recent: false, icon: "JV",
      description: "An NPTEL online course on core Java programming, covering object-oriented concepts, classes and objects, exception handling and the Java standard libraries." },
    { id: "irohub-python-django", title: "Certification in Python Django", provider: "iROHUB", recent: false, icon: "DJ",
      description: "A professional certification in Python Django, covering the framework's MVT architecture, models, views, templates, forms and database integration for web application development." },
    { id: "simplilearn-ai-python-beginners", pdf: "simplelearn python.pdf", title: "AI Python for Beginners", provider: "Simplilearn", recent: false, icon: "AI",
      description: "A Simplilearn course introducing Python programming for artificial intelligence, covering the language basics, data handling and the first steps towards building AI-based applications." },
    { id: "simplilearn-ethical-hacking-101", pdf: "ethical hacking shalbin.pdf", title: "Ethical Hacking 101", provider: "Simplilearn", recent: false, icon: "EH",
      description: "A Simplilearn course on the fundamentals of ethical hacking, covering common security threats, vulnerability assessment and the defensive practices used to protect systems." },
    { id: "simplilearn-machine-learning-python", pdf: "ML Shalbin Thomas.pdf", title: "Machine Learning Using Python", provider: "Simplilearn", recent: false, icon: "ML",
      description: "A Simplilearn course on machine learning with Python, covering supervised and unsupervised learning, data preparation and the use of popular libraries to build predictive models." }
];

window.renderCerts = function (filter = "all") {
    const grid = document.getElementById("certGrid");
    if (!grid) return;
    grid.innerHTML = "";

    window.certificates.forEach((cert, i) => {
        const show = filter === "all" || (filter === "recent" && cert.recent) || cert.provider === filter;
        const card = document.createElement("article");
        card.className = "cert-card visible" + (show ? "" : " hidden");
        card.style.transitionDelay = (i % 3) * 80 + "ms";
        card.innerHTML = `
            <div class="cert-top">
                <span class="provider-tag">${cert.provider}</span>
                ${cert.recent ? '<span class="new-tag">NEW</span>' : ""}
            </div>
            <div class="cert-icon">${cert.icon}</div>
            <h3>${cert.title}</h3>
            <p>${cert.description}</p>
            <button class="details-btn" data-cert="${cert.id}">View Certificate <span>&#8599;</span></button>`;
        grid.appendChild(card);
    });
};

renderCerts();
