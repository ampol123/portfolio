let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Student', 'Basketball Player','Web Designer','Lover','Frontend Developer',],
    typeSpeed: 80,
    backspeed: 80,
    backDelay: 1100,
    loop: true,
  });