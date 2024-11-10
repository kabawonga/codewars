const encode = (str, n) =>
	Array.from(
		str,
		(c, i) => c.charCodeAt(0) - 96 + Number(String(n)[i % String(n).length])
	)
