const calculateYears = (principal, interest, tax, desired) => {
	let res = 0
	while (principal < desired) {
		principal += principal * interest - principal * interest * tax
		res++
	}
	return res
}
