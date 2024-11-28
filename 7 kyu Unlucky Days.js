const unluckyDays = (year) =>
	Array.from(
		{ length: 12 },
		(el, i) => new Date(year, i, 13).getDay() == 5
	).filter(Boolean).length
