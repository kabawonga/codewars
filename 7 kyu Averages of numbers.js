const averages = (numbers) =>
	numbers ? numbers.slice(0, -1).map((el, i) => (el + numbers[i + 1]) / 2) : []
