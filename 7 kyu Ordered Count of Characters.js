const orderedCount = (text) =>
	[...new Set(text)].map((el) => [el, text.split(el).length - 1])
