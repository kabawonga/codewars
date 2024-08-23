const evaporator = (content, evap_per_day, threshold) => {
	let days = 0
	let currentContent = 100

	while (currentContent > threshold) {
		currentContent -= currentContent * (evap_per_day / 100)
		days++
	}

	return days
}
