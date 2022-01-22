const header = document.querySelector('header');
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

window.addEventListener('scroll', scrollEvent);

menuToggle.addEventListener('click', toggleMenu);

function scrollEvent(){
    header.classList.toggle('sticky', window.scrollY > 0);
}

function toggleMenu() {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}