const solve = (s) => {
	const lowerCaseCount = s.replace(/[^a-z]/g, '').length
	const upperCaseCount = s.replace(/[^A-Z]/g, '').length

	return lowerCaseCount >= upperCaseCount ? s.toLowerCase() : s.toUpperCase()
}
