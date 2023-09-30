function convertToPx(data) {
	if (data.includes('rem') || data.includes('em')) {
		const convertUnit = getComputedStyle(document.querySelector(':root')).getPropertyValue('--convert-unit') || 16;
		data = parseInt(data) * convertUnit;
	}

	return data;
}

const headerEl = document.querySelector('.header');
const headerNextEl = headerEl.nextElementSibling;
const headerElHeight = headerEl.offsetHeight;
const cssHeaderHeight = getComputedStyle(document.querySelector(':root')).getPropertyValue('--header-height');


document.querySelector(':root').style.setProperty('--header-height', `${headerElHeight > convertToPx(cssHeaderHeight) ? headerElHeight + 'px': cssHeaderHeight}`);

window.addEventListener('scroll', () => {
	if (window.scrollY > parseInt(headerNextEl.offsetTop + 50)) {
		headerEl.classList.add('bg');
	} else {
		headerEl.classList.remove('bg');
	}
})