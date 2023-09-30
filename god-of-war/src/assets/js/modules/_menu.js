const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const allMenuLinks = menu.querySelectorAll('a');
const headerEl = document.querySelector('.header');

function menuHandler() {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	headerEl.classList.toggle('active');
}

function closeMenu() {
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
	headerEl.classList.remove('active');
}

menuBtn.addEventListener('click', menuHandler);

allMenuLinks.forEach((link) => {
	link.addEventListener('click', closeMenu)
})
