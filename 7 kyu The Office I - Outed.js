const outed = (meet, boss) => {
	const totalScore = Object.entries(meet).reduce(
		(acc, [key, value]) => (key === boss ? acc + value * 2 : acc + value),
		0
	)

	const averageScore = totalScore / Object.keys(meet).length

	return averageScore <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}
