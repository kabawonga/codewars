const getDivisorsCnt = (n) => {
	let res = 0
	n % Math.sqrt(n) ? res : res++
	for (let i = 1; i < Math.sqrt(n); i++) {
		n % i ? res : (res += 2)
	}
	return res
}
