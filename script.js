function myFunction() {
    document.getElementById("demo1").style.display = "none";
}

// 1. Select the division element
const demo1 = document.getElementById('1');
const demo2 = document.getElementById('2');

const test1 = document.getElementById('test1');
const test2 = document.getElementById('test2');

// 2. Add the click event listener
function one() {
    // You can also change styles, text, or structure here
    document.getElementById('test1').style.display='block'
    document.getElementById('test2').style.display='none'
};
function two() {
    // You can also change styles, text, or structure here
    document.getElementById('test1').style.display='none'
    document.getElementById('test2').style.display='block'
};



const resizeBox = document.getElementById('main-box');

function adjustHeight() {
    // Get the element's distance from the top of the viewport
    const topDistance = resizeBox.getBoundingClientRect().top;
    
    // Calculate remaining height to the bottom of the screen
    const remainingHeight = window.innerHeight - topDistance;
    
    // Set the height (ensuring it doesn't go below 0)
    resizeBox.style.height = `${Math.max(0, remainingHeight)}px`;
}

// Run on initial load
adjustHeight();

// Recalculate if the window is resized or scrolled
window.addEventListener('resize', adjustHeight);