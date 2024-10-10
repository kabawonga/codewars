const factorial = (n) => {
	if (n <= 1) return 1
	return n * factorial(n - 1)
}

const strong = (n) => {
	const digits = [...String(n)]
	const sum = digits.reduce((sum, digit) => sum + factorial(digit), 0)

	if (sum === n) return 'STRONG!!!!'
	return 'Not Strong !!'
}
