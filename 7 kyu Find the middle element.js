const gimme = (triplet) =>
	triplet.indexOf([...triplet].sort((a, b) => a - b)[1])
