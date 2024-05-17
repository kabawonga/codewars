const cutCube = (volume, n) =>
	!(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1)
