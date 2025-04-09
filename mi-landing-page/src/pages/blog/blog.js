document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".pdf-card img");

    images.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.2)";
            img.style.boxShadow = "4px 4px 15px rgba(0, 0, 0, 0.4)";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";
        });
    });
});
