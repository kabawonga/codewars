const solution = (digits) => {
	const res = []
	for (let i = 0; i <= digits.length - 5; i++) {
		res.push(digits.slice(i, i + 5))
	}
	return Math.max(...res.map(Number))
}
