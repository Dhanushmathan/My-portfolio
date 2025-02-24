import Typed from 'typed.js';

const contactUs = document.getElementById("contactMe");
const homeSec = document.getElementById("home");
const aboutSec = document.getElementById("about");
const skillSec = document.getElementById("skill");
const projectSec = document.getElementById("project");
const contactSec = document.getElementById("contact");
const roleEl = document.getElementById("role");
const form = document.querySelector("form");
const yearEl = document.getElementById("year");
const topButton = document.getElementById("topBtn");

contactUs.addEventListener('click', () => {
    document.getElementById("contactSec").scrollIntoView({
        behavior: 'smooth'
    });
})

homeSec.addEventListener('click', () => {
    document.getElementById("homeSec").scrollIntoView({
        behavior: 'smooth'
    });
});

aboutSec.addEventListener('click', () => {
    document.getElementById("aboutSec").scrollIntoView({
        behavior: 'smooth'
    });
});

skillSec.addEventListener('click', () => {
    document.getElementById("skillSec").scrollIntoView({
        behavior: 'smooth'
    });
});

projectSec.addEventListener('click', () => {
    document.getElementById("projectSec").scrollIntoView({
        behavior: 'smooth'
    });
});

contactSec.addEventListener('click', () => {
    document.getElementById("contactSec").scrollIntoView({
        behavior: 'smooth'
    });
});

// role content
var typed = new Typed(roleEl, {
    strings: ["Frontend Developer", "Web Developer", "UI/UX Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    // cursorChar: '|',
});

// Scroll top button
window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
        topButton.classList.add('show-btn');
    } else {
        topButton.classList.remove('show-btn');
    }
};

topButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Year
const year = new Date().getFullYear();
yearEl.textContent = year;
