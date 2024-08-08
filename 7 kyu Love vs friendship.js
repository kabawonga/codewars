const wordsToMarks = (string) =>
	[...string].reduce((acc, el) => acc + el.charCodeAt(0) - 96, 0)
