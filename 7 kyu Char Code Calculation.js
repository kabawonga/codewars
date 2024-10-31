const calc = (x) => {
	const total1 = x
		.split('')
		.map((char) => char.charCodeAt())
		.join('')
	const total2 = total1.replace(/7/g, '1')
	const sumDigits = (str) => [...str].reduce((acc, el) => acc + +el, 0)

	return sumDigits(total1) - sumDigits(total2)
}
