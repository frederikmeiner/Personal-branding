document.addEventListener("DOMContentLoaded", function () {
    initScrollToTop();
    initTypedJs();
});

// ---------- Her erklære funktion og siger den skal sættes ind med HTML ---------- //
function initScrollToTop() {
    document.querySelector("body").innerHTML += /*html*/ `
        <a id="scrollTop" onclick="scrollToTheTop()" title="Go to top">^</a>
    `;
    window.onscroll = function () {
        scrollFunction();
    };
}
//-------- Der bliver brugt en if statement, hvor den skal være mere en 500px for at block ----///
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}

function scrollToTheTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}