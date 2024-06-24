const oddOrEven = (array) =>
	array.reduce((acc, number) => acc + number, 0) % 2 ? 'odd' : 'even'
