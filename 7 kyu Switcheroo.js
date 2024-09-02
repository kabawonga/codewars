const switcheroo = (x) =>
	x
		.split('')
		.reduce((acc, el) => acc + (el == 'a' ? 'b' : el == 'b' ? 'a' : el), '')
