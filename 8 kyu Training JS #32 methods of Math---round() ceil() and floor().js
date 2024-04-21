const roundIt = (n) =>
	n.toString().split('.')[0].length > n.toString().split('.')[1].length
		? Math.floor(n)
		: n.toString().split('.')[0].length < n.toString().split('.')[1].length
		? Math.ceil(n)
		: Math.round(n)
