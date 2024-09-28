const findDigit = (num, nth) =>
	nth > 0 ? +Math.abs(num).toString().split('').reverse()[nth - 1] || 0 : -1
