const countDevelopers = (list) =>
	list.filter((el) => el.continent === 'Europe' && el.language === 'JavaScript')
		.length
