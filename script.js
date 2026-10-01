function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

function closeAllModals() {
    let modals = document.querySelectorAll(".modal");
    modals.forEach(function(modal) {
        modal.style.display = "none";
    });
}

window.onclick = function(event) {
    let modals = document.querySelectorAll(".modal");
    modals.forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};