let nav = document.getElementById("navmenu");

nav.addEventListener("click", toggleHamburger);
nav.addEventListener("mouseleave", toggleHamburger);
nav.addEventListener("animationstart", () => {

})

let animationRunning = false

function trackAnimation(e) {
    animationRunning = true
    
}

function toggleHamburger() {

    /*
    *  Check if animation currently running 
    *  if so listen for animation end and call this again
    *
    *  If not start next animation
    *
    */
    while (animationRunning) {
        
    }

    nav.style.animation = "none";
    nav.offsetHeight;
    nav.style.animation = null;

    if (nav.classList.contains("opened")) {
        nav.classList.remove("opened");
        nav.classList.add("closed");
        return;
    }

    nav.classList.remove("closed");
    nav.classList.add("opened");
}
