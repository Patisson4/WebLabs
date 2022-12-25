window.addEventListener("load", () => {
    document.querySelectorAll(".button").forEach(btn => {
        if (location.pathname.endsWith(btn.getAttribute("href"))) {
            btn.classList.add("active")
        }
    });
});