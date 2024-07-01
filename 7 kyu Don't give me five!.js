const dontGiveMeFive = (start, end) => {
	let res = 0
	for (let i = start; i <= end; i++) {
		!/5/.test(i) ? res++ : res
	}
	return res
}
