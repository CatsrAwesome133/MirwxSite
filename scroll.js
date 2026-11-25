window.addEventListener('DOMContentLoaded', () => {
    bgElements = document.querySelectorAll('.bg');
    bgContainer = document.getElementById('bg')
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    bgElements.forEach((bg) => {
    bg.style.transform = `translateY(${scrollPosition * -0.3}px)`;
    });
});