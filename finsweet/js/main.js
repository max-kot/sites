Fancybox.bind("[data-fancybox]", {
});

// меню
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.menu a'); // все ссылки что находятся в классе .menu
const header = document.querySelector('.header');

menuBtn.addEventListener('click', function () {
	menu.classList.toggle('active');
	menuBtn.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
	header.classList.toggle('active');
})

for (let i = 0; i < menuLinks.length; i++) {
	let menuLink = menuLinks[i]; // получаем каждую отдельную ссылку

	menuLink.addEventListener('click', function () {
		menu.classList.remove('active');
		menuBtn.classList.remove('active');
		document.body.classList.remove('no-scroll');
		header.classList.remove('active');
	})
}


// перемещаем номер к меню
// меню мы нашли и поместили в переменную menu
const phoneBox = document.querySelector('.header__phone-box');
const headerBody = document.querySelector('.header__body');
const screen = window.matchMedia('(max-width: 1024px)');

function moveElement(screen) {
	if (screen.matches) {
		// prepend ставит в начало
		menu.prepend(phoneBox);
	} else {
		headerBody.append(phoneBox);
	}
}

moveElement(screen);
screen.addListener(moveElement);


// автовычисление высоты шапки
const headerHeight = header.offsetHeight;
const root = document.querySelector(':root'); // корневое хранилище переменных
// меняем переменную === название переменной, значение
root.style.setProperty('--header-height', `${headerHeight}px`);