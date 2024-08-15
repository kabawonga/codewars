const predictAge = (...args) =>
	Math.floor(Math.sqrt(args.reduce((acc, el) => (acc += el ** 2), 0)) / 2)
