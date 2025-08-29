// Load header
fetch('/./shared/header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        const header = document.querySelector(".header");
        let lastScroll = 0; // keep track of last scroll position

        window.addEventListener("scroll", function () {
            let currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 50) {
                // scrolling DOWN
                header.classList.add("scrolled");
            } else if (currentScroll < lastScroll) {
                // scrolling UP
                header.classList.remove("scrolled");
            }

            lastScroll = currentScroll;
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
