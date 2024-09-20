const maxDiff = (list) =>
	list.length ? Math.abs(Math.max(...list) - Math.min(...list)) : 0
