const sumOfN = (n) =>
	Array.from(
		{ length: Math.abs(n) + 1 },
		(el, i) => ((n > 0 ? 1 : -1) * (i * (i + 1))) / 2
	)
