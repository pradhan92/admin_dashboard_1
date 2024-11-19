document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle label");
    const sidebarToggle = document.getElementById("sidebar-toggle");

    menuToggle.addEventListener("click", () => {
        sidebarToggle.checked = !sidebarToggle.checked;
    });
});
