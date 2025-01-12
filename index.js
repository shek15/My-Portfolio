// Scroll Progress
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
});

// Drop Down

const toggle_btn = document.querySelector(".toggle_btn");
const toggleIcon = document.querySelector(".fa-solid");
const dropDown = document.querySelector(".dropdown");

toggle_btn.onclick = function () {
    dropDown.classList.toggle('open');
    const isOpen = dropDown.classList.contains('open');
    if (isOpen) {
        toggleIcon.classList = 'fa-solid fa-xmark';
    } else {
        toggleIcon.classList = 'fa-solid fa-bars';
    }
    
}