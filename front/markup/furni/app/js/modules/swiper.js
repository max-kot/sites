import Swiper from "swiper/bundle";

const slider = new Swiper('.testimonials-slider', {

	loop: true,
	autoHeight: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	 },

	pagination: {
		el: '.testimonials-slider__pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.testimonials-slider__btn-next',
		prevEl: '.testimonials-slider__btn-prev',
	}
});