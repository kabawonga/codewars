const gps = (s, x) =>
	x.length <= 1
		? 0
		: Math.floor(
				Math.max(...x.slice(1).map((el, i) => (3600 * (el - x[i])) / s))
		  )
