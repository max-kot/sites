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


//* SPOILER *//
const allSpoilerEl = document.querySelectorAll('.spoiler');

allSpoilerEl.forEach((spoiler) => {
	let title = spoiler.querySelector('.spoiler__title'); // spoiler.children[0]
	let content = spoiler.querySelector('.spoiler__content'); // spoiler.children[1]
	let contentHeight = content.scrollHeight;

	if (spoiler.classList.contains('active')) {
		content.style.height = `${contentHeight}px`;
	} else {
		content.style.height = 0;
	}

	title.addEventListener('click', () => {
		if (spoiler.classList.contains('active')) {
			spoiler.classList.remove('active');
			content.style.height = 0;
		} else {
			spoiler.classList.add('active');
			content.style.height = `${contentHeight}px`;
		}
	})
})

//! Ещё один способ
/*
for (let i = 0; i < allSpoilerEl.length; i++) {
	let spoiler = allSpoilerEl[i];
	let title = spoiler.querySelector('.spoiler__title');
	let content = spoiler.querySelector('.spoiler__content');
	let contentHeight = content.scrollHeight;

	if (spoiler.classList.contains('active')) {
		content.style.height = `${contentHeight}px`;
	} else {
		content.style.height = 0;
	}

	title.addEventListener('click', () => {
		if (spoiler.classList.contains('active')) {
			spoiler.classList.remove('active');
			content.style.height = 0;
		} else {
			spoiler.classList.add('active');
			content.style.height = `${contentHeight}px`;
		}
	})
}
*/

//! КАТИНА ВЕРСИЯ !//
/*
const allSpoilerEl = document.querySelectorAll('.spoiler');
const allSpoilerTitleEl = document.querySelectorAll('.spoiler__title');
const allSpoilerContentEl = document.querySelectorAll('.spoiler__content');

allSpoilerContentEl.forEach((content) => {
	//content.style.height = 0;
	content.style.display = 'none';
})
allSpoilerTitleEl.forEach((title) => {
	title.addEventListener('click', () => {
		const content = title.nextElementSibling;

		if (content.style.display === 'none') {
			content.style.display = 'block';
		} else {
			content.style.display = 'none';
		}
	})
})
*/

//* CUSTOM SELECT *//
const select = document.querySelector('[data-select]');
const selectInput = document.querySelector('[data-select-input]');
const selectList = document.querySelector('[data-select-list]');
const allSelectItem = document.querySelectorAll('[data-select-list] li');


selectInput.setAttribute('readonly', "")
// при нажатии переключает класс active === список выпадает и стрелочка переворачивается
selectInput.addEventListener('click', () => {
	selectList.classList.toggle('active');
	select.classList.toggle('active');
})

// 
allSelectItem.forEach((item) => {
	item.addEventListener('click', () => {
		allSelectItem.forEach((item) => {
			item.classList.remove('active');
		})
		item.classList.add('active');
		selectList.classList.remove('active');
		select.classList.remove('active');
		selectInput.value = item.getAttribute('data-select-value');
	})
})


//* АВТОВЫЧИСЛЕНИЕ ВЫСОТЫ ИНПУТА *//
const selectInputHeight = selectInput.offsetHeight;
// меняем переменную === название переменной, значение
root.style.setProperty('--input-height', `${selectInputHeight}px`);