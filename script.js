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
    'osas',
    'ari',
    'untitled1'
];

const ficUntitled = [
    'ttt-1',
    'ttt-2'
];

const ariSkits = [
    ''
]

// "element" is the ID of the element to display
function switchBlock(element, collection, from) {
    collection.forEach(e => {
        document.getElementById(e).style.display = 'none';
    });
    document.getElementById(element).style.display = 'block';
    document.getElementById(element).animate([
        { transform: `translate(${from})`, opacity: 0, offset: 0},
        { transform: 'translate(0px, 0px)', opacity: 1, offset: 1}
        ], {
        duration: 300,
        iterations: 1,
        easing: 'ease-in-out',
        fill: 'forwards'
        });
    const url = new URL(window.location.href);
    url.searchParams.set('section', element);
    const updatedUrl = url.toString();
    window.history.pushState({}, '', updatedUrl);
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