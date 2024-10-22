const boredom = (staff) => {
	const totalBoredom = Object.values(staff).reduce(
		(sum, department) => sum + obj[department],
		0
	)

	if (totalBoredom <= 80) {
		return 'kill me now'
	} else if (totalBoredom >= 100) {
		return 'party time!!'
	} else {
		return 'i can handle this'
	}
}

const obj = {
	accounts: 1,
	finance: 2,
	canteen: 10,
	regulation: 3,
	trading: 6,
	change: 6,
	IS: 8,
	retail: 5,
	cleaning: 4,
	'pissing about': 25,
}
