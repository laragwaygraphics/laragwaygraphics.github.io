const gallery = document.getElementById("gallery");
const mainGallery = document.getElementById("mainGallery");
const html = document.getElementsByTagName('html')[0];

function showGallery(images) {
    child = mainGallery.children;

    if (child.length > 0) {
        for (let i = 0; i < child.length; 0) {
            mainGallery.removeChild(child[0])
        }
    }

    gallery.style.visibility = "visible"; 
    html.style.overflowY = "hidden";

    images.forEach(element => {
        imageElement = document.createElement("img");
        imageElement.setAttribute("src", element);

        mainGallery.appendChild(imageElement);
        console.log(imageElement);
    });
}

function closeGallery() {
    html.style.overflowY = "auto";
    gallery.style.visibility = "hidden"; 
}

function openLink(link) {
    window.open(link, '_blank').focus();
}

about = document.getElementById("about");
aboutLink = document.getElementById("aboutLink");
works = document.getElementById("works");
worksLink = document.getElementById("worksLink");
services = document.getElementById("services");
servicesLink = document.getElementById("servicesLink");
skills = document.getElementById("skills");
skillsLink = document.getElementById("skillsLink");
contact = document.getElementById("contact");
contactLink = document.getElementById("contactLink");
currentLink = document.getElementById("currentLink");

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if (isInViewport(contact)) {
        deactivateLinks();
        contactLink.classList.add("active");
        currentLink.innerHTML = "Contact";
    }
    else if (isInViewport(skills)) {
        deactivateLinks();
        skillsLink.classList.add("active");
        currentLink.innerHTML = "Skills";
    }
    else if (isInViewport(services)) {
        deactivateLinks();
        servicesLink.classList.add("active");
        currentLink.innerHTML = "Services";
    }
    else if (isInViewport(works)) {
        deactivateLinks();
        worksLink.classList.add("active");
        currentLink.innerHTML = "Works";
    }
    else if (isInViewport(about)) {
        deactivateLinks();
        aboutLink.classList.add("active");
        currentLink.innerHTML = "About";
    }
});

function deactivateLinks() {
    aboutLink.classList.remove("active");
    skillsLink.classList.remove("active");
    servicesLink.classList.remove("active");
    worksLink.classList.remove("active");
    contactLink.classList.remove("active");
}