// Demos
function one() {
    document.getElementById('test1').style.display='block'
    document.getElementById('test2').style.display='none'
};
function two() {
    document.getElementById('test1').style.display='none'
    document.getElementById('test2').style.display='block'
};

// Main menu thing
const blocks = [
    'content-1',
    'content-2'
];

const ficUntitled = [
    'untitled-1',
    'untitled-2'
];

// "element" is the ID of the element to display
function switchBlock(element, collection) {
    collection.forEach(e => {
        document.getElementById(e).style.display = 'none';
    });
    document.getElementById(element).style.display = 'block';
    document.getElementById(element).animate([
        { transform: 'translateX(100px)', opacity: 0, offset: 0},
        { transform: 'translateX(0px)', opacity: 1, offset: 1}
        ], {
        duration: 300,
        iterations: 1,
        easing: 'ease-in-out',
        fill: 'forwards'
        });
}

function reformatWriting() {
    const elements = document.querySelectorAll('.bar-scene');

    elements.forEach(element => {
    element.textContent = '✧';
    });
}

document.addEventListener("DOMContentLoaded", () => {
    reformatWriting();
});