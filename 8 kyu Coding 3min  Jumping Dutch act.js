const sc = (floor) =>
	floor <= 1
		? ''
		: floor < 7
		? 'Aa~ '.repeat(floor - 1) + 'Pa! ' + 'Aa!'
		: 'Aa~ '.repeat(floor - 1) + 'Pa!'
