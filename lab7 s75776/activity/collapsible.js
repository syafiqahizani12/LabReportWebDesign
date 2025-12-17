document.addEventListener("DOMContentLoaded", function () {
    const collapsiblesButton = document.querySelector(".collapsible");
    const content = document.querySelector(".content");

    collapsiblesButton.addEventListener("click", function () {
        if(content.computedStyleMap.display==="block"){
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});