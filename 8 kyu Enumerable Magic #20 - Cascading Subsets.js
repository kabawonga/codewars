const eachCons = (array, n) => {
	let arr = []

	for (let i = 0; i < array.length; i++) {
		arr.push(array.slice(i, i + n))
	}

	return arr.filter((el) => el.length == n)
}
