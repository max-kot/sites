const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu');
const allLinksMenu = document.querySelectorAll('.menu a');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menuNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
})

allLinksMenu.forEach(function (link) {
	link.addEventListener('click', function () {
		menuBtn.classList.remove('active');
		menuNav.classList.remove('active');
		document.body.classList.remove('no-scroll');
	})
})