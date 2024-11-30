const jumpingNumber = (n) =>
	String(n)
		.split('')
		.every((a, b, arr) => b == 0 || Math.abs(a - arr[b - 1]) == 1)
		? 'Jumping!!'
		: 'Not!!'
