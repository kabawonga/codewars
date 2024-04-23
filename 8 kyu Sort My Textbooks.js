const sorter = (textbooks) =>
	textbooks.sort((a, b) =>
		a.toLowerCase() < b.toLowerCase()
			? -1
			: a.toLowerCase() > b.toLowerCase()
			? 1
			: 0
	)
