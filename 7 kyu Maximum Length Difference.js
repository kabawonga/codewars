const mxdiflg = (a1, a2) =>
	a1.length && a2.length
		? Math.max(
				...a1.map((x) =>
					Math.max(...a2.map((y) => Math.abs(x.length - y.length)))
				)
		  )
		: -1
