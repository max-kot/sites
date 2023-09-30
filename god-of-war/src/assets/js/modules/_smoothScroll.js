const allLinks = document.querySelectorAll('a[href]');

allLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const href = e.currentTarget.getAttribute('href');

		if (!href && !href.startWidth('#')) {
			return
		}

		const section = href.slice(1);
		const top = document.querySelector(`#${section}`)?.offsetTop || 0;

		window.scrollTo({
			top: top,
			behavior: 'smooth',
		})
	})
})