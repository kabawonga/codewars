const divisors = (integer) => {
	let res = []
	for (let i = 2; i <= integer / 2; i++) {
		if (integer % i == 0) {
			res.push(i)
		}
	}
	return res.length == 0 ? `${integer} is prime` : res
}
