const evenNumbers = (array, number) =>
	array.filter((el) => el % 2 == 0).slice(-number)
