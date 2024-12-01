const pattern = (n) =>
	Array.from({ length: n }, (el, i) => `${i + 1}`.repeat(i + 1)).join('\n')
