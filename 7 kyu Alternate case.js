const alternateCase = (s) =>
	[...s]
		.map((el) => (el == el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()))
		.join('')
