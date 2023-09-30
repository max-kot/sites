const allSpoiler = document.querySelectorAll('.faq-item');
const allSpoilerTitle = document.querySelectorAll('.faq-item__title');

allSpoilerTitle.forEach((spoilerTitle) => {

	let spoilerContent = spoilerTitle.nextElementSibling;
	let spoiler = spoilerTitle.parentElement;

	if (spoiler.classList.contains('active')) {
		spoilerContent.style.height = `${spoilerContent.scrollHeight}px`;
		spoiler.classList.add('active');
	} else {
		spoilerContent.style.height = 0;
		spoiler.classList.remove('active');
	}
	
	
	spoilerTitle.addEventListener('click', () => {

		if (spoiler.classList.contains('active')) {
			spoilerContent.style.height = 0;
			spoiler.classList.remove('active');
		} else {
			spoilerContent.style.height = `${spoilerContent.scrollHeight}px`;
			spoiler.classList.add('active');
		}
	})
})
