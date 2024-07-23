const factorial = (n) => {
	if (n < 0 || n > 12) {
		throw new RangeError('Входное значение должно быть от 0 до 12')
	}

	if (n === 0) {
		return 1
	}

	let result = 1
	for (let i = 1; i <= n; i++) {
		result *= i
	}

	return result
}
