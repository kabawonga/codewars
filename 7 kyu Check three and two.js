const checkThreeAndTwo = (array) =>
	Object.values(
		array.reduce((acc, el) => ((acc[el] = (acc[el] || 0) + 1), acc), {})
	)
		.sort()
		.join('') == '23'
