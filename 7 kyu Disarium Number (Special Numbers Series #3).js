const disariumNumber = (n) =>
	n ==
	[...String(n)].reduce((acc, el, i) => acc + Math.pow(Number(el), i + 1), 0)
		? 'Disarium !!'
		: 'Not !!'
