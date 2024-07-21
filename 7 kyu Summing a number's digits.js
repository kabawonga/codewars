const sumDigits = (number) =>
	Math.abs(number)
		.toString()
		.split('')
		.reduce((acc, el) => acc + Number(el), 0)
