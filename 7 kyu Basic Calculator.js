const calculate = (num1, operation, num2) =>
	operation == '+'
		? num1 + num2
		: operation == '-'
		? num1 - num2
		: operation == '*'
		? num1 * num2
		: operation == '/' && num2 !== 0
		? num1 / num2
		: null
