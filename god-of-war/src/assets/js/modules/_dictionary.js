const dictionary = {
	ru: {
		editions: 'Версии',
		controller: 'Джостик',
		about: 'Об Игре',
		explore: 'Узнать подробнее',
		news: 'Новости',
		faq: 'Вопросы и Ответы',
		realease: 'Дата выхода',
		day: 'Д',
		hour: 'Ч',
		minute: 'М',
		second: 'С',
		h1: 'Бог Войны Рагнарек',
		firstDescr: 'Действие происходит через три года после событий предыдущей игры великолепного зима, продолжающаяся три лета, подходит к концу, и тогда начнется предсказанное Рагнарек.',
		buyNow: 'Купить Сейчас',
	},
	en: {
		editions: 'Editions',
		controller: 'Сontroller',
		about: 'About Game',
		explore: 'Explore',
		news: 'News',
		faq: 'FAQ',
		realease: 'Realease',
		day: 'D',
		hour: 'H',
		minute: 'M',
		second: 'S',
		h1: 'God of War Ragnarök',
		firstDescr: `Taking place three years following the events of the previous game, Fimbulwinter, a great winter that spans three summers, is drawing to a close which will begin the prophesied Ragnarök.`,
		buyNow: 'Buy Now',
	}
}

const allCurrentLangEl = document.querySelectorAll('.menu__btn-lang-current');
const allLangBtn = document.querySelectorAll('.menu__btn-lang');
//document.body.classList.add(currentLangEl.dataset.lang);

function updateContent() {
	const allWords = document.querySelectorAll('[data-dictionary]');
	const currentLangKey = localStorage.getItem('lang');

	allWords.forEach((word) => {
		let currentKey = word.dataset.dictionary;
		word.innerHTML = dictionary[currentLangKey][currentKey];
	})

}

allLangBtn.forEach((btn) => {
	window.addEventListener('load', () => {
		if (localStorage.getItem('lang') === btn.dataset.lang) {
			allCurrentLangEl.forEach((currentLangEl) => {
				currentLangEl.innerText = btn.innerHTML
			});
		}
	})

	btn.addEventListener('click', () => {
		allCurrentLangEl.forEach((currentLangEl) => {
			currentLangEl.innerText = btn.innerText
			currentLangEl.dataset.lang = btn.dataset.lang;
		});
		localStorage.setItem('lang', btn.dataset.lang)
		updateContent();
	})
})


updateContent();