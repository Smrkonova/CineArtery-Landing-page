
// Load header first
fetch('/./shared/header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // ---- Active Menu Highlight ----
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll(".header__middle a, .menu__list a");

        navLinks.forEach(link => {
            const linkPath = link.getAttribute("href").split("/").pop();
            if (currentPath === linkPath || (currentPath === "index.html" && (linkPath === "/" || linkPath === ""))) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        // ---- Scroll Hide/Show Header ----
        // const header = document.querySelector(".header");
        // let lastScroll = 0;

        // window.addEventListener("scroll", function () {
        //     let currentScroll = window.scrollY;

        //     if (currentScroll > lastScroll && currentScroll > 50) {
        //         header.classList.add("scrolled");
        //     } else if (currentScroll < lastScroll) {
        //         header.classList.remove("scrolled");
        //     }

        //     lastScroll = currentScroll;
        // });
        // ---- Scroll Hide/Show Header ----
        const header = document.querySelector(".header");

        window.addEventListener("scroll", function () {
            let currentScroll = window.scrollY;

            if (currentScroll > 50) {
                header.classList.add("scrolled"); // hide
            } else {
                header.classList.remove("scrolled"); // show only at very top
            }
        });

    });

// Load footer
fetch('/./shared/footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
