const movie = (card, ticket, perc) => {
	let n = 0,
		cA = 0
	for (let p = ticket * perc; Math.ceil(card) >= cA; p *= perc)
		n++, (cA += ticket), (card += p)
	return n
}
