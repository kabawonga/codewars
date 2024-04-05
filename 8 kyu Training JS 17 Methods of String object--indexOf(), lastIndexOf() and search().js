const firstToLast = (str, c) =>
	str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1
