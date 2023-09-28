Fancybox.bind("[data-fancybox]", {
});

//* МЕНЮ *//
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


//* ПЕРЕМЕЩАЕМ НОМЕР К МЕНЮ *//
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


//* АВТОВЫЧИСЛЕНИЕ ВЫСОТЫ ШАПКИ *//
const headerHeight = header.offsetHeight;
const root = document.querySelector(':root'); // корневое хранилище переменных
// меняем переменную === название переменной, значение
root.style.setProperty('--header-height', `${headerHeight}px`);



//* СОРТИРОВКА СТАТЕЙ *//
// находим массив с кнопками переключения
const allCategoryBtn = document.querySelectorAll('.categories__btn');
// находим массив со статьями
const allArticles = document.querySelectorAll('.article');
const listContainer = document.querySelector('.blog__articles-list');

// ФУНКЦИИ
// Сортировка статей по категориям
function sortAtricles(category) {
	// переводим из NodeList в Array наши статьи чтобы можно было пользоваться методом sort
	let allArticlesArray = Array.from(allArticles);

	// отсортировать статьи в порядке убывания (b - a)
	allArticlesArray.sort(function (a, b) {
		// указываем ключ в квадратных скобках т.к. мы ссылаемся на переменную category
		return b.dataset[category] - a.dataset[category];
	});

	// добавить отсортированный список обратно
	allArticlesArray.forEach((article) => {
		listContainer.appendChild(article);
	})
}

// перебор массива кнопок
allCategoryBtn.forEach(function (btn) {
	btn.addEventListener('click', function () {
		// опять перебираем массив чтобы у всех кнопок забрать класс active
		allCategoryBtn.forEach(function (btn) {
			btn.classList.remove('active');
		})

		// добавляем класс active нажатой кнопке
		btn.classList.add('active');
		const currentBtnName = btn.getAttribute('data-btn');

		// прячем все элементы списка
		allArticles.forEach(function (article) {
			article.remove();
		})

		// отсортировать массив со статьями
		if (currentBtnName === 'latest') {
			sortAtricles('id'); // 'id' === указываем по какому типу сортирваать
		}

		// отсортировать массив со статьями
		if (currentBtnName === 'popular') {
			sortAtricles('views');
		}

		// отсортировать массив со статьями
		if (currentBtnName === 'favorite') {
			sortAtricles('likes');
		}


	})
})

// когда страница загрузится
window.addEventListener('load', function () {
	sortAtricles('id');
})


//* SWIPER *//
const testimonialsSlider = new Swiper('.testimonials-slider', {
	slidesPerView: 1,
	spaceBetween: 48,
	loop: true,

	navigation: {
		nextEl: ".testimonials-slider__btn-next",
		prevEl: ".testimonials-slider__btn-prev",
	},

	pagination: {
		el: ".testimonials-slider__pagination",
		clickable: true,
	},

	breakpoints: {
		1025: {
			slidesPerView: 2,
		}
	}
})

