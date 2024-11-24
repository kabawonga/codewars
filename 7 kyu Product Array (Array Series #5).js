const productArray = (numbers) =>
	numbers.map((num) => numbers.reduce((prod, n) => prod * n, 1) / num)
