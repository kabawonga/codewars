const inAscOrder = (arr) =>
	JSON.stringify(arr) === JSON.stringify(arr.sort((a, b) => a - b))
