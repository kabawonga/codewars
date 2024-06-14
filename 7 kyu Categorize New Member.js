const openOrSenior = (data) =>
	data.map((el) => (el[0] > 54 && el[1] > 7 ? 'Senior' : 'Open'))
