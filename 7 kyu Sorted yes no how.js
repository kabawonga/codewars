const isSortedAndHow = (array) =>
	JSON.stringify(array) == JSON.stringify([...array].sort((a, b) => a - b))
		? 'yes, ascending'
		: JSON.stringify(array) == JSON.stringify([...array].sort((a, b) => b - a))
		? 'yes, descending'
		: 'no'
