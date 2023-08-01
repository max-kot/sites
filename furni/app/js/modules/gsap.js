import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// регистрируем плагины
gsap.registerPlugin(ScrollTrigger);

// анимируем прелоадер
const tlLoader = gsap.timeline();

let loaderAnimation = tlLoader
	.set('.loader__item', { yPercent: -100, })
	.set('.loader__title', { opacity: 0 })
	.to('.loader__title', {
		opacity: 1,
		duration: 0.5,
		scale: 1.2,
	})
	.to('.loader__item', {
		yPercent: 100,
		duration: 1,
		stagger: 0.25,
		repeat: -1,
		yoyo: true,
	})

// логика лоадера
const loader = document.querySelector('.loader');

window.addEventListener('load', function () {
	tlLoader
		.to('.loader__title', {
			opacity: 0,
			duration: 1,
			scale: 0.8,
		})
		.to('.loader__item', {
			yPercent: -100,
			opacity: 0,
			yoyo: false,
			repeat: 0,
		})
		.to('.loader', {
			yPercent: -100,
			duration: 0.8,
			onComplete: () => {
				loaderAnimation.pause();
				loader.remove();
			},
		}, '-=0.2')
})

// Laptop Animations
//const laptopScreen = window.matchMedia('(min-width: 1024px)');

//if (laptopScreen.matches) {
const tlAnimation = gsap.timeline()
tlAnimation
	.to('.first__image', {
		scrollTrigger: {
			trigger: '.first',
			start: '0 0',
			scrub: true,
		},
		xPercent: 200,
		opacity: 0.5,
		scale: 0.1,
	},
	)
	.to('.first__content', {
		scrollTrigger: {
			trigger: '.first',
			start: '0 0',
			scrub: true,
		},
		xPercent: -200,
	}
	)
	.from('.product__content', {
		scrollTrigger: {
			trigger: '.first',
			start: 'center',
			scrub: true,
		},
		xPercent: -150,
		scale: 0.1,
	})
	.from('.product__list', {
		scrollTrigger: {
			trigger: '.first',
			start: 'center',
			scrub: true,
		},
		xPercent: 150,
		scale: 0.1,
	})
	.to('.why-us__content', {
		scrollTrigger: {
			trigger: '.why-us',
			start: 'top',
			scrub: true,
		},
		yPercent: -150,
	})
	.from('.why-us__image', {
		scrollTrigger: {
			trigger: '.product',
			start: 'center',
			scrub: true,
		},
		yPercent: -150,
		opacity: 0,
		scale: 0.1,
	})
	.from('.about__image-box', {
		scrollTrigger: {
			trigger: '.why-us',
			start: 'center',
			scrub: true,
		},
		xPercent: -150,
		opacity: 0.5,
		scale: 0.1,
	})
	.from('.about__content', {
		scrollTrigger: {
			trigger: '.why-us',
			start: 'center',
			scrub: true,
		},
		xPercent: 150,
		opacity: 0.5,
		scale: 0.1,
	})
	.from('.description__body', {
		scrollTrigger: {
			trigger: '.about',
			start: 'top',
			scrub: true,
		},
		xPercent: -100,
		opacity: 0.5,
	})
	.from('.testimonials__body', {
		scrollTrigger: {
			trigger: '.description',
			start: '-400%',
			scrub: true,
		},
		xPercent: 100,
		opacity: 0.8,
	})
	.from('.blog-section__item', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: 'top',
			scrub: true,
		},
		yPercent: 100,
		opacity: 0.8,
		stagger: 0.1,
	})
	.from('.subscrubtion__image', {
		scrollTrigger: {
			trigger: '.blog-section',
			start: 'top',
			scrub: true,
		},
		xPercent: 150,
		opacity: 0.8,
		scale: 0.1,
	})
	.from('.subscrubtion__content', {
		scrollTrigger: {
			trigger: '.blog-section',
			start: 'top',
			scrub: true,
		},
		xPercent: -150,
		opacity: 0.8,
	})
	.from('.footer__nav', {
		scrollTrigger: {
			trigger: '.subscrubtion',
			start: '-100%',
			scrub: true,
		},
		yPercent: 100,
		opacity: 0.8,
	})
//}