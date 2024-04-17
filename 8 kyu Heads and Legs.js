const animals = (heads, legs) => {
	let cows = legs / 2 - heads
	let chickens = heads - cows
	return chickens < 0 || cows < 0 || legs % 2 == 1
		? 'No solutions'
		: [chickens, cows]
}
