const containAllRots = (strng, arr) =>
	[...strng]
		.map((el, i) => strng.slice(i) + strng.slice(0, i))
		.every((el) => arr.includes(el))
