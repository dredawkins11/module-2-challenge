let nav = document.getElementById("navmenu");
let links = document.getElementsByClassName("nav-item");

nav.addEventListener("click", toggleHamburger);
nav.addEventListener("mouseleave", closeHamburger);
nav.addEventListener("animationstart", () => {});

let animationRunning = false;

function trackAnimation(e) {
    animationRunning = true;
}

function toggleHamburger() {
    /*
     *  Check if animation currently running
     *  if so listen for animation end and call this again
     *
     *  If not start next animation
     *
     */

    nav.style.animation = "none";
    nav.offsetHeight;
    nav.style.animation = null;

    if (nav.classList.contains("opened")) {
        nav.classList.remove("opened");
        nav.classList.add("closed");
        links.forEach((el) => {
            el.classList.remove("opened");
        });

        return;
    }

    nav.classList.remove("closed");
    nav.classList.add("opened");
    links.forEach((el) => {
        el.classList.add("opened");
    });
}

function closeHamburger() {
    
    if (!nav.classList.contains("opened") || nav.classList.contains("closed")) {
        return;
    }
    
    nav.style.animation = "none";
    nav.offsetHeight;
    nav.style.animation = null;
    
    nav.classList.remove("opened");
    nav.classList.add("closed");

    links.forEach((el) => {
        el.classList.add("opened");
    });
}
