const isTriangle = (a, b, c) =>
	a + b + c - Math.max(a, b, c) > Math.max(a, b, c)
