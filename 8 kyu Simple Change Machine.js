const changeMe = (moneyIn) =>
	moneyIn == '£5'
		? `${'20p '.repeat(5 * 5).trimEnd()}`
		: moneyIn == '£2'
		? `${'20p '.repeat(5 * 2).trimEnd()}`
		: moneyIn == '£1'
		? `${'20p '.repeat(5 * 1).trimEnd()}`
		: moneyIn == '50p'
		? `${'20p '.repeat(2).trimEnd()} 10p`
		: moneyIn == '20p'
		? `${'10p '.repeat(2).trimEnd()}`
		: moneyIn
