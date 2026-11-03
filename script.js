
// =====================================
// LABCREATOR WEBSITE JAVASCRIPT
// =====================================


// PRODUCT DATA

const products = [
    {
        id: "metal-furniture",
        number: "01",
        title: "Metal Work Furniture",
        description: "Durable and functional furniture for modern laboratory environments.",
        image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg",
        details: "Our metal work furniture category includes practical laboratory furniture solutions designed to support daily laboratory operations.",
        features: [
            "Functional laboratory workstations",
            "Durable furniture construction",
            "Organised workspace solutions",
            "Suitable for laboratory environments"
        ]
    },
    {
        id: "fume-hoods",
        number: "02",
        title: "Laboratory Fume Hoods",
        description: "Laboratory ventilation equipment designed for controlled working environments.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=85",
        details: "Laboratory fume hoods are designed to provide a controlled workspace for laboratory activities involving potentially hazardous fumes.",
        features: [
            "Laboratory ventilation solutions",
            "Functional working enclosure",
            "Designed for laboratory applications",
            "Project-specific configuration"
        ]
    },
    {
        id: "biosafety",
        number: "03",
        title: "BioSafety Cabinets",
        description: "Specialised cabinet solutions for controlled laboratory applications.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85",
        details: "Biosafety cabinets provide specialised enclosed working environments for suitable laboratory applications. Selection should be based on the required protection level and applicable standards.",
        features: [
            "Enclosed working environment",
            "Laboratory application support",
            "Configuration based on requirements",
            "Specialised equipment category"
        ]
    },
    {
        id: "accessories",
        number: "04",
        title: "Laboratory Accessories",
        description: "Useful accessories and supporting equipment for laboratory spaces.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
        details: "Laboratory accessories support organised and functional workspaces. The right accessories depend on the laboratory's workflow and application.",
        features: [
            "Supporting laboratory equipment",
            "Workspace organisation",
            "Application-based selection",
            "Complementary laboratory solutions"
        ]
    }
];


// SERVICE DATA

const services = [
    {
        id: "turnkey",
        number: "01",
        title: "Turnkey Services",
        description: "Complete laboratory solutions from planning to project execution.",
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=85",
        details: "Turnkey laboratory services bring different project requirements together into a coordinated solution, from initial planning to execution.",
        features: [
            "Project requirement understanding",
            "Laboratory planning",
            "Furniture and equipment coordination",
            "Project execution support"
        ]
    },
    {
        id: "planning",
        number: "02",
        title: "Planning & Safety",
        description: "Thoughtful planning for practical and safe laboratory environments.",
        image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
        details: "Laboratory planning considers available space, workflows, equipment requirements and relevant safety considerations.",
        features: [
            "Space planning",
            "Workflow considerations",
            "Equipment placement planning",
            "Safety-focused design considerations"
        ]
    },
    {
        id: "support",
        number: "03",
        title: "Support Services",
        description: "Assistance for laboratory requirements and project-related needs.",
        image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=900&q=85",
        details: "Support services help customers understand their requirements and coordinate suitable laboratory solutions.",
        features: [
            "Requirement discussions",
            "Product-related assistance",
            "Project coordination",
            "Customer communication"
        ]
    },
    {
        id: "design",
        number: "04",
        title: "Design & Build",
        description: "Laboratory design and build solutions based on project requirements.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
        details: "Design and build services focus on creating laboratory environments that align with the intended application and functional requirements.",
        features: [
            "Design coordination",
            "Space utilisation",
            "Furniture planning",
            "Build and installation coordination"
        ]
    }
];


// PROJECT DATA

const projects = [
    {
        id: "research-lab",
        number: "01",
        title: "Research Laboratory",
        description: "A laboratory environment planned for research and scientific activities.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
        details: "Research laboratory projects require careful consideration of equipment, workstations, storage and workflow requirements.",
        features: [
            "Research-oriented workspace",
            "Laboratory furniture planning",
            "Equipment placement considerations",
            "Functional workspace design"
        ]
    },
    {
        id: "pharma-lab",
        number: "02",
        title: "Pharmaceutical Laboratory",
        description: "Laboratory planning for pharmaceutical applications.",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=85",
        details: "Pharmaceutical laboratory environments are planned around application-specific requirements, workflows and equipment needs.",
        features: [
            "Application-based planning",
            "Equipment coordination",
            "Workspace organisation",
            "Project-specific requirements"
        ]
    },
    {
        id: "education-lab",
        number: "03",
        title: "Educational Laboratory",
        description: "Functional laboratory spaces for learning and practical activities.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85",
        details: "Educational laboratory spaces need to support practical learning, equipment accessibility and organised workstations.",
        features: [
            "Learning-oriented workspaces",
            "Furniture planning",
            "Equipment organisation",
            "Practical laboratory layouts"
        ]
    }
];


// =====================================
// CARD GENERATION
// =====================================

function createCard(item, type) {

    return `
        <article class="item-card">

            <div class="card-image">
                <img
                    src="${item.image}"
                    alt="${item.title}"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='https://placehold.co/900x600/e8f1ef/14363c?text=LabCreator';"
                >
            </div>

            <div class="card-body">

                <span class="card-number">
                    ${item.number} / ${type.toUpperCase()}
                </span>

                <h3>${item.title}</h3>

                <p>${item.description}</p>

                <button
                    class="card-action"
                    data-detail="${item.id}"
                    data-type="${type}"
                    type="button">

                    Explore Details →

                </button>

            </div>

        </article>
    `;
}


function displayCards(containerId, data, type) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = data
        .map(item => createCard(item, type))
        .join("");

}


// DISPLAY ALL CARDS

displayCards("homeProducts", products.slice(0, 3), "product");
displayCards("allProducts", products, "product");

displayCards("homeServices", services.slice(0, 3), "service");
displayCards("allServices", services, "service");

displayCards("allProjects", projects, "project");


// =====================================
// PAGE NAVIGATION
// =====================================

const pageViews = document.querySelectorAll(".page-view");

let previousView = "products";


function showPage(viewName, updateHistory = true) {

    const target = document.getElementById(viewName);

    if (!target || !target.classList.contains("page-view")) {
        return;
    }

    pageViews.forEach(page => {
        page.classList.remove("active");
    });

    target.classList.add("active");


    // Update desktop navigation

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.classList.toggle(
            "active",
            link.dataset.view === viewName
        );

    });


    // Close mobile menu

    const mobileNav = document.getElementById("mobileNav");
    const menuToggle = document.getElementById("menuToggle");

    if (mobileNav) {
        mobileNav.classList.remove("open");
    }

    if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
    }


    // Scroll to top

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    // Update browser URL

    if (updateHistory) {

        history.pushState(
            { view: viewName },
            "",
            "#" + viewName
        );

    }

}


// Handle all navigation links

document.addEventListener("click", function(event) {

    const link = event.target.closest("[data-view]");

    if (!link) return;

    event.preventDefault();

    const viewName = link.dataset.view;

    if (viewName) {
        showPage(viewName);
    }

});


// =====================================
// PRODUCT / SERVICE / PROJECT DETAILS
// =====================================

function openDetail(id, type) {

    let data = [];

    if (type === "product") {
        data = products;
    }

    if (type === "service") {
        data = services;
    }

    if (type === "project") {
        data = projects;
    }


    const item = data.find(element => element.id === id);

    if (!item) return;


    // Remember the previous page

    const activePage = document.querySelector(".page-view.active");

    if (activePage && activePage.id !== "detail") {
        previousView = activePage.id;
    }


    const detailContent = document.getElementById("detailContent");

    if (!detailContent) return;


    // Generate detail page

    detailContent.innerHTML = `

        <div class="detail-layout">

            <div>
                <img
                    class="detail-image"
                    src="${item.image}"
                    alt="${item.title}"
                    onerror="this.onerror=null; this.src='https://placehold.co/900x600/e8f1ef/14363c?text=LabCreator';"
                >
            </div>


            <div class="detail-content">

                <span class="eyebrow">
                    ${type.toUpperCase()} DETAILS
                </span>

                <h1>${item.title}</h1>

                <p>${item.details}</p>

                <h3>Key Features</h3>

                <ul>
                    ${item.features.map(feature => `
                        <li>${feature}</li>
                    `).join("")}
                </ul>

                <a
                    href="#contact"
                    data-view="contact"
                    class="btn btn-primary">

                    Enquire Now ↗

                </a>

            </div>

        </div>

    `;


    showPage("detail");

}


// Listen for Explore Details clicks

document.addEventListener("click", function(event) {

    const button = event.target.closest("[data-detail]");

    if (!button) return;

    const id = button.dataset.detail;
    const type = button.dataset.type;

    openDetail(id, type);

});


// =====================================
// BACK BUTTON
// =====================================

const backButton = document.getElementById("backButton");

if (backButton) {

    backButton.addEventListener("click", function() {

        showPage(previousView);

    });

}


// =====================================
// MOBILE MENU
// =====================================

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");


if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", function() {

        const isOpen = mobileNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

    });

}


// =====================================
// CONTACT FORM
// =====================================

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const subject = document.getElementById("subject").value;

        const message = document.getElementById("message").value.trim();


        const emailSubject = encodeURIComponent(
            subject + " - Website Enquiry"
        );


        const emailBody = encodeURIComponent(

            "Name: " + name +
            "\nEmail: " + email +
            "\nPhone: " + phone +
            "\nSubject: " + subject +
            "\nMessage: " + message

        );


        window.location.href =
            "mailto:Inquiry@labcreator.in" +
            "?subject=" + emailSubject +
            "&body=" + emailBody;

    });

}


// =====================================
// BROWSER BACK / FORWARD SUPPORT
// =====================================

window.addEventListener("popstate", function() {

    const viewName =
        window.location.hash.replace("#", "") || "home";


    if (viewName === "detail") {

        showPage(previousView, false);

    } else if (document.getElementById(viewName)) {

        showPage(viewName, false);

    } else {

        showPage("home", false);

    }

});


// =====================================
// INITIAL PAGE
// =====================================

window.addEventListener("DOMContentLoaded", function() {

    const initialView =
        window.location.hash.replace("#", "") || "home";


    if (
        document.getElementById(initialView) &&
        document.getElementById(initialView).classList.contains("page-view")
    ) {

        showPage(initialView, false);

    } else {

        showPage("home", false);

    }

});
