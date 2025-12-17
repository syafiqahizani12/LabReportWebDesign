// Automatic Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// Progress Bar
function startProgress() {
    let bar = document.getElementById("progressBar");
    let width = 0;
    let interval = setInterval(() => {
        if (width >= 80) {
            clearInterval(interval);
        } else {
            width++;
            bar.style.width = width + "%";
        }
    }, 20);
}

// Collapsible Section
let coll = document.querySelector(".collapsible");
let content = document.querySelector(".content");

coll.addEventListener("click", () => {
    content.style.display = content.style.display === "block" ? "none" : "block";
});
