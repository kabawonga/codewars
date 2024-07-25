const minValue = (values) =>
	+Array.from(new Set(values))
		.sort((a, b) => a - b)
		.join('')
