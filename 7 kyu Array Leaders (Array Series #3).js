const arrayLeaders = (numbers) =>
	numbers.filter(
		(el, i) => el > numbers.slice(i + 1).reduce((acc, el) => acc + el, 0)
	)
