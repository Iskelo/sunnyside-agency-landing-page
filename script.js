const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger');
const b = document.querySelector('body');


burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	b.classList.toggle('lock');
});


document.querySelectorAll('.header__link').forEach(n => n.addEventListener("click", () => {
	burger.classList.remove('active');
	menu.classList.remove('active');
	b.classList.remove('lock');
}))