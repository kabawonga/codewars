const findLongest = (array) =>
	array.reduce((acc, el) =>
		`${el}`.length > `${acc}`.length ? (acc = el) : acc
	)
