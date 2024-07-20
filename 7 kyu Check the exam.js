const checkExam = (array1, array2) =>
	Math.max(
		0,
		array2.reduce(
			(acc, el, i) => acc + (el ? (el == array1[i] ? 4 : -1) : 0),
			0
		)
	)
