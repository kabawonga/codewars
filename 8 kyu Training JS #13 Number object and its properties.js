const whatNumberIsIt = (n) =>
	n == Infinity
		? 'Input number is Number.POSITIVE_INFINITY'
		: n == -Infinity
		? 'Input number is Number.NEGATIVE_INFINITY'
		: n == 1.7976931348623157e308
		? 'Input number is Number.MAX_VALUE'
		: isNaN(n)
		? 'Input number is Number.NaN'
		: n == 5e-324
		? 'Input number is Number.MIN_VALUE'
		: 'Input number is ' + n
