const XO = (str) =>
	(str.match(/x/gi) && str.match(/x/gi).length) ==
	(str.match(/o/gi) && str.match(/o/gi).length)
