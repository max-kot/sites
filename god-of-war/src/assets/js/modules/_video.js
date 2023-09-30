const videoWrapperEl = document.querySelector('.video');
const videoEl = videoWrapperEl.querySelector('video');
const videoBtnEl = document.querySelector('.video__btn');
const videoControlEl = document.querySelector('.video__control-box');

videoBtnEl.addEventListener('click', () => {
	videoControlEl.classList.add('active');
	if (videoEl.paused) {
		videoEl.play();
		videoBtnEl.innerText = 'Pause';
		videoControlEl.classList.add('hide');
		//videoEl.controls = true;
	} else {
		videoControlEl.classList.remove('hide');
		videoEl.pause();
		videoBtnEl.innerText = 'Play';
		//videoEl.removeAttribute('controls')
	}
})

window.addEventListener('load', () => {
	videoEl.removeAttribute('controls')
})