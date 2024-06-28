const removeSmallest = (numbers) => [
	...numbers.slice(0, numbers.indexOf(Math.min(...numbers))),
	...numbers.slice(numbers.indexOf(Math.min(...numbers)) + 1),
]
