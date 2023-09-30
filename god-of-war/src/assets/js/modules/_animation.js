const allAnimationEl = document.querySelectorAll('[data-anime]');

window.addEventListener('scroll', () => {
	//console.log(window.scrollY)
	allAnimationEl.forEach((element) => {
		const positionStart = element.dataset.animeStart; 

		if (window.scrollY > positionStart) {
			element.classList.add('animation')
			element.classList.remove('hide')
		} else {
			element.classList.add('hide')
		}
		
		if (element.dataset.animeLoad === 'onload') {
			// если нужно чтобы элемент не исчезал при листании в начала (для первой секции)
			element.classList.add('animation')
			element.classList.toggle('hide')
		}
	})
})

window.addEventListener('load', () => {
	allAnimationEl.forEach((element) => {
		//element.classList.add('hide');
		//element.classList.add('animation')

		if (element.dataset.animeLoad === 'onload') {
			element.style.transition = 'unset';
			element.classList.add('hide');

			if (window.screenTop === 0) {
				setTimeout(() => {
					element.style.transition = 'all 0.8s';
					element.classList.add('animation')
					element.classList.remove('hide')
				}, 800)
			}
		}
	})
})