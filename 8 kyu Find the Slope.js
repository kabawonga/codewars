const slope = ([a, b, c, d]) =>
	isFinite((d - b) / (c - a)) ? `${(d - b) / (c - a)}` : 'undefined'
