document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    const increaseButton = document.getElementById("increase-progress");
    const resetButton = document.getElementById("reset-progress");
    const simulateButton = document.getElementById("simulate-progress");

    let progress = 0;
    let interval = null;

    function updateProgress(value) {
        progressBar.style.width = value + "%";
        progressText.textContent = value + "%";
    }

    // Increase Progress Manually
    increaseButton.addEventListener("click", function () {
        if (progress < 100) {
            progress += 10;
            updateProgress(progress);
        } else {
            alert("Progress is complete!");
        }
    });

    // Reset Progress
    resetButton.addEventListener("click", function () {
        progress = 0;
        updateProgress(progress);
        clearInterval(interval);
    });

    // Simulate File Upload / Download
    simulateButton.addEventListener("click", function () {
        clearInterval(interval);
        progress = 0;
        updateProgress(progress);

        interval = setInterval(() => {
            if (progress < 100) {
                progress += Math.floor(Math.random() * 8) + 2; // realistic speed
                if (progress > 100) progress = 100;
                updateProgress(progress);
            } else {
                clearInterval(interval);
                alert("Upload completed successfully!");
            }
        }, 400);
    });
});
