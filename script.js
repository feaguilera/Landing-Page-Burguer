const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    menuBtn.classList.toggle('ativo');
});
