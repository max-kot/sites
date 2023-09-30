const timer = document.querySelector('[data-timer]');
const timerDate = timer.getAttribute('data-timer');

const getTimerValues = (diff) => {
	return {
		seconds: (diff / 1000) % 60,
		minutes: (diff / (1000 * 60) ) % 60,
		hours: (diff / (1000 * 60 * 60)) % 24,
		days: (diff / (1000 * 60 * 60 * 24)) % 30,
	}
}

const formatValue = (value) => {
	return value < 10 ? `0${value}` : value;
}

const setTimerValues = (values) => {
	Object.entries(values).forEach(([key, value]) => {
		const timerValue = document.querySelector(`#${key}`);
		timerValue.innerText = formatValue(Math.floor(value));
	})
}

const startTimer = (date) => {
	const timerId = setInterval(() => {
		const diff = new Date(date).getTime() - new Date().getTime();
		
		if (diff < 0) {
			clearInterval(timerId);
			return;
		}

		setTimerValues(getTimerValues(diff));
	}, 1000)

}


startTimer(timerDate);
