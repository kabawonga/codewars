const wordValue = (a) =>
	a.map(
		(el, i) =>
			el
				.replace(/\s+/g, '')
				.split('')
				.reduce((s, c) => s + (c.charCodeAt(0) - 96), 0) *
			(i + 1)
	)
