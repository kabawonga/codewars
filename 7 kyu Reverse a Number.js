const reverseNumber = (n) =>
	Math.sign(n) * parseInt(Math.abs(n).toString().split('').reverse().join(''))
