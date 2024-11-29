const lastSurvivor = (letters, coords) =>
	coords.reduce((el, i) => el.slice(0, i) + el.slice(i + 1), letters)
