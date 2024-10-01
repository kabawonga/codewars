const addLetters = (...letters) =>
	String.fromCharCode(
		((letters.reduce((acc, el) => acc + el.charCodeAt(0) - 96, 0) - 1 + 26) %
			26) +
			97 || 122
	)
