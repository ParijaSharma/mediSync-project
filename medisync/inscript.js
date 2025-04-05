document.addEventListener("DOMContentLoaded", function () {
    const days = document.querySelectorAll(".days");
    const medicinePanels = document.querySelectorAll(".medicine-panel");
    const medicineModal = document.getElementById("medicine-modal");
    const slideContainer = document.querySelector(".slide-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    
    // Hide all medicine panels on page load except Monday's panel
    medicinePanels.forEach((panel, index) => {
        panel.style.display = index === 0 ? "block" : "none";
    });
    
    // Ensure the medicine modal is hidden on page load
    medicineModal.style.display = "none";

    days.forEach((day, index) => {
        day.addEventListener("click", function () {
            // Hide all medicine panels
            medicinePanels.forEach(panel => panel.style.display = "none");
            
            // Show the corresponding medicine panel
            medicinePanels[index].style.display = "block";
        });
    });

    // Scroll functionality for the weekly slider
    prevButton.addEventListener("click", function () {
        slideContainer.scrollBy({ left: -150, behavior: "smooth" });
    });
    
    nextButton.addEventListener("click", function () {
        slideContainer.scrollBy({ left: 150, behavior: "smooth" });
    });
});
