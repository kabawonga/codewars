const smallEnough = (a, limit) =>
	a.reduce((acc, el) => (el <= limit ? acc : (acc = false)), true)
