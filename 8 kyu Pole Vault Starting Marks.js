const startingMark = (bodyHeight) =>
	+(
		((10.67 - 9.45) / (1.83 - 1.52)) * bodyHeight +
		9.45 -
		((10.67 - 9.45) / (1.83 - 1.52)) * 1.52
	).toFixed(2)
