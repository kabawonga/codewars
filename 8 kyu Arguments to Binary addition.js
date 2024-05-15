const arr2bin = (arr) => {
	let res = 0
	arr.forEach((el) => {
		if (typeof el === 'number') res += el
	})
	return res.toString(2)
}
