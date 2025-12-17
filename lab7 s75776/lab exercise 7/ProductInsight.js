// Collapsible Section
const coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Progress Bar
let progress = 0;
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

document.getElementById("increase-progress").addEventListener("click", () => {
    if (progress < 100) progress += 10;
    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "%";
});

document.getElementById("reset-progress").addEventListener("click", () => {
    progress = 0;
    progressBar.style.width = "0%";
    progressText.textContent = "0%";
});

document.getElementById("simulate-progress").addEventListener("click", () => {
    progress = 0;
    progressBar.style.width = "0%";
    progressText.textContent = "0%";
    let interval = setInterval(() => {
        if (progress >= 100) clearInterval(interval);
        else {
            progress++;
            progressBar.style.width = progress + "%";
            progressText.textContent = progress + "%";
        }
    }, 30);
});
