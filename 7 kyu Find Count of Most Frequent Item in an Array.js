const mostFrequentItemCount = (c) =>
	c.length ? Math.max(...c.map((x) => c.filter((y) => y == x).length)) : 0
