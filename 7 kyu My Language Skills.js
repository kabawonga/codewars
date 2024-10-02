const myLanguages = (results) =>
	Object.keys(results)
		.filter((el) => results[el] >= 60)
		.sort((a, b) => results[b] - results[a])
