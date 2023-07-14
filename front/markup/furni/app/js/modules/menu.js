const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menuNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
})