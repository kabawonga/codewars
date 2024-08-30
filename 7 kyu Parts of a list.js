const partlist = (arr) =>
	arr
		.map((el, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')])
		.slice(1)
