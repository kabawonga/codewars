const number = (busStops) =>
	busStops.reduce((acc, el) => acc + el[0] - el[1], 0)
