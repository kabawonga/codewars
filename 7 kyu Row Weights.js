const rowWeights = (array) => [
	array.filter((el, i) => i % 2 === 0).reduce((acc, el) => acc + el, 0),
	array.filter((el, i) => i % 2 !== 0).reduce((acc, el) => acc + el, 0),
]
