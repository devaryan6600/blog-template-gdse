const menu = document.querySelector('#menu');
const navbar = document.querySelector('#navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (e.target.id != "menu" && e.target.id != "navbar") {
        navbar.classList.remove('open');
    }
});