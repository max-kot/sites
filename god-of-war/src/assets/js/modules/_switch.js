const allSwitchEl = document.querySelectorAll('.explore-switch__checkbox input');
const allLabelEl = document.querySelectorAll('.explore-switch__label');
const allPriceEl = document.querySelectorAll('.explore__price');
const allListEl = document.querySelectorAll('.explore-info__list');

function allActiveToggle (nodeEl, matchName, compareElement) {
	nodeEl.forEach((el) => {
		if (el[matchName] === compareElement) {
			el.classList.toggle('active');
		}

		if(el.parentElement.dataset[matchName] === compareElement) {
			el.classList.toggle('active');
		}
	})
}

allSwitchEl.forEach((switchEl) => {
	switchEl.addEventListener('click', () => {
		allActiveToggle(allLabelEl, 'htmlFor', switchEl.id);
		allActiveToggle(allPriceEl, 'switch', switchEl.id);
		allActiveToggle(allListEl, 'switch', switchEl.id);
	})
})

allPriceEl.forEach((el) => {
	console.log(el.parentElement.dataset.switch);
})