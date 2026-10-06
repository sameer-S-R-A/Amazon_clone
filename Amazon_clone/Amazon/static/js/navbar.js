document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("open-sidebar");
    const closeBtn = document.getElementById("sidebar-close");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");

    function openSidebar() {
        sidebar.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeSidebar() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (openBtn) {
        openBtn.addEventListener("click", openSidebar);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeSidebar);
    }

    if (overlay) {
        overlay.addEventListener("click", closeSidebar);
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && sidebar.classList.contains("active")) {
            closeSidebar();
        }
    });
});
