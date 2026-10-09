import anime from 'animejs';

const box = document.querySelector('.box');
const icon = document.querySelector('.img-icon');

anime({
  targets: box,
  translateX: 250,
  duration: 2000,
  easing: 'easeInOutQuad'
});

anime({
  targets: icon,
  translateX: 250,
  duration: 2000,
  easing: 'easeInOutQuad'
});