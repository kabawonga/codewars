const fizzbuzz = (n) =>
	Array.from({ length: n }, (el, i) =>
		(i + 1) % 15 === 0
			? 'FizzBuzz'
			: (i + 1) % 3 === 0
			? 'Fizz'
			: (i + 1) % 5 === 0
			? 'Buzz'
			: i + 1
	)
