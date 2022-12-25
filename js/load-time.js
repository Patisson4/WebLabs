(() => {
    let beforeLoadTime = new Date().getTime();

    window.addEventListener('load', () => {
        let loadTime = (new Date().getTime() - beforeLoadTime) / 1000;
        document.getElementById("load-time").innerHTML = "Page loaded time " + loadTime + " seconds";
    })
})();