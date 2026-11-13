
const educationData = {

    mca: {
        title: "Master of Computer Applications",
        institution: "Santhigiri College",
        year: "2025 – 2027",
        score: "8.24 CGPA",
        image: "Assets/images/mca-college.jpg",

        description:
            "I am currently pursuing my Master of Computer Applications at Santhigiri College. This programme helps me strengthen my technical knowledge, programming skills and problem-solving abilities. I am exploring modern technologies, software development and practical project implementation.",

        gallery: [
            "Assets/images/mca-college.jpg",
            "Assets/images/mca-campus.jpg",
            "Assets/images/mca-event.jpg"
        ]
    },

    bca: {
        title: "Bachelor of Computer Applications",
        institution: "Your BCA College Name",
        year: "2020 – 2025",
        score: "7.03 CGPA",
        image: "Assets/images/bca-college.jpg",

        description:
            "I completed my Bachelor of Computer Applications, where I developed a foundation in computer science and software development. My academic experience introduced me to programming, database management, web technologies and application development.",

        gallery: [
            "Assets/images/bca-college.jpg",
            "Assets/images/bca-campus.jpg",
            "Assets/images/bca-event.jpg"
        ]
    },

    plusTwo: {
        title: "Higher Secondary Education",
        institution: "Your Higher Secondary School",
        year: "Enter Your Passing Year",
        score: "84%",
        image: "Assets/images/plus-two-school.jpg",

        description:
            "I completed my higher secondary education with 84%. This stage strengthened my academic foundation and helped me develop the knowledge and confidence required for higher education.",

        gallery: [
            "Assets/images/plus-two-school.jpg",
            "Assets/images/plus-two-campus.jpg",
            "Assets/images/plus-two-event.jpg"
        ]
    },

    sslc: {
        title: "Secondary School Education",
        institution: "Your High School Name",
        year: "Enter Your Passing Year",
        score: "77%",
        image: "Assets/images/sslc-school.jpg",

        description:
            "I completed my SSLC education with 77%. My school journey helped me build a strong academic foundation, discipline, communication skills and confidence.",

        gallery: [
            "Assets/images/sslc-school.jpg",
            "Assets/images/sslc-campus.jpg",
            "Assets/images/sslc-event.jpg"
        ]
    }

};


const modal = document.getElementById("detailsModal");
const closeButton = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalInstitution = document.getElementById("modalInstitution");
const modalDescription = document.getElementById("modalDescription");

const modalYear = document.getElementById("modalYear");
const modalScore = document.getElementById("modalScore");

const mainImage = document.getElementById("mainDetailImage");
const modalImageTitle = document.getElementById("modalImageTitle");

const galleryContainer = document.getElementById("galleryContainer");


/* OPEN EDUCATION DETAILS */

function openEducationDetails(course) {

    const data = educationData[course];

    if (!data) return;

    modalTitle.textContent = data.title;
    modalInstitution.textContent = data.institution;
    modalDescription.textContent = data.description;

    modalYear.textContent = data.year;
    modalScore.textContent = data.score;

    mainImage.src = data.image;
    mainImage.alt = data.institution;

    modalImageTitle.textContent = data.institution;

    galleryContainer.innerHTML = "";

    data.gallery.forEach((imagePath, index) => {

        const image = document.createElement("img");

        image.src = imagePath;
        image.alt = data.institution + " photo " + (index + 1);
        image.className = "gallery-image";

        image.addEventListener("click", function () {
            mainImage.src = imagePath;
        });

        galleryContainer.appendChild(image);

    });

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}


/* CLOSE MODAL */

function closeEducationDetails() {

    modal.classList.remove("active");
    document.body.style.overflow = "";

}


/* BUTTON EVENTS */

document.querySelectorAll(".details-button").forEach(button => {

    button.addEventListener("click", function () {

        const course = this.dataset.course;

        openEducationDetails(course);

    });

});


/* CLOSE BUTTON */

closeButton.addEventListener("click", closeEducationDetails);


/* CLOSE WHEN CLICKING OUTSIDE */

modal.addEventListener("click", function (event) {

    if (event.target === modal) {
        closeEducationDetails();
    }

});


/* CLOSE USING ESCAPE KEY */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && modal.classList.contains("active")) {
        closeEducationDetails();
    }

});
