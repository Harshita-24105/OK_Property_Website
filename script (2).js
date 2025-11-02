const projectData = {
    project1: {
        img: "images/Goda_anexe.jpg",
        details: "<h3>Goda Annexe</h3><p>3BHK ONE FLOOR, ONE DREAM!!</p><p>At Gangapur Road</p>"
    },
    project2: {
        img: "images/Goda_anexe.jpg",
        details: "<h3>Urban Heights</h3><p>Luxury apartments with skyline views.</p>"
    },
    project3: {
        img: "images/residential-villas.jpg",
        details: "<h3>Green Valley Estate</h3><p>Eco-friendly residential community.</p>"
    },
    project4: {
        img: "images/residential-villas.jpg",
        details: "<h3>EK</h3><p>Eco-friendly residential community.</p>"
    },
    project5: {
        img: "images/residential-villas.jpg",
        details: "<h3>Eknath</h3><p>Eco-friendly residential community.</p>"
    }
};

function showProjectDetails(projectId) {
    const project = projectData[projectId];
    const modal = document.getElementById("expanded-view");
    const modalImg = document.getElementById("expanded-img");
    const modalDetails = document.getElementById("expanded-details");
    const closeButton = document.querySelector(".close");

    if (!project) {
        console.error("Project data not found for:", projectId);
        return;
    }

    // **Set Image & Details**
    modalImg.src = project.img;
    modalDetails.innerHTML = project.details;

    // **Show Modal**
    modal.style.display = "block";
    closeButton.style.display = "block";

    // **Disable Background Scroll**
    document.body.style.overflow = "hidden";

    // **Wait for image to load then scroll**
    modalImg.onload = function () {
        modal.scrollIntoView({ behavior: "smooth", block: "start" });
    };
}

function closeProjectDetails() {
    document.getElementById("expanded-view").style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling again
}

function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

function showDetails(id) {
    document.getElementById(id).style.display = "block";
}
// Get project ID from URL
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
