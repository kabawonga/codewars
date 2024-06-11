const getSum = (a, b) =>
	((Math.max(a, b) - Math.min(a, b) + 1) * (Math.min(a, b) + Math.max(a, b))) /
	2
