const foldTo = (d) =>
	d < 0 ? null : d <= 0.0001 ? 0 : Math.ceil(Math.log2(d / 0.0001))
