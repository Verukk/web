document.addEventListener("DOMContentLoaded", () => {
    function setActiveMenu() {
        const menuItems = document.querySelectorAll("nav a");

        menuItems.forEach(item => item.classList.remove("active"));

        const hash = window.location.hash;
        if (hash) {
            const activeLink = document.querySelector(`nav a[href="${hash}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    }

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            setTimeout(setActiveMenu, 100);
        });
    });

    setActiveMenu();
});
