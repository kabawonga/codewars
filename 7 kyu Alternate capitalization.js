const capitalize = (s) => [
	s
		.split('')
		.map((el, index) => (index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()))
		.join(''),
	s
		.split('')
		.map((el, index) => (index % 2 !== 0 ? el.toUpperCase() : el.toLowerCase()))
		.join(''),
]
