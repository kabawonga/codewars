const findNextSquare = (sq) =>
	Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq) + 1) ** 2
