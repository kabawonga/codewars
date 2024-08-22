const vowelIndices = (word) =>
	word
		.split('')
		.reduce(
			(acc, el, i) =>
				'aeiouy'.includes(el.toLowerCase()) ? [...acc, i + 1] : acc,
			[]
		)
