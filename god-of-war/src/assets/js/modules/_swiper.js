import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const slider = new Swiper('.news__slider', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	initialSlide: 2,
	centeredSlides:true,
	freeMode: true,

	modules: [Navigation],
	navigation: {
		nextEl: '.news__slider-btn-next',
		prevEl: '.news__slider-btn-prev',
	},

	breakpoints: {
		1001: {
			slidesPerView: 1.5,
		},
		1401:{
			slidesPerView: 2.5,
		},
		
	}
})