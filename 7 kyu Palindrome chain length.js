const palindromeChainLength = (n) =>
	[...`${n}`].reverse().join('') == n
		? 0
		: 1 + palindromeChainLength(n + +[...`${n}`].reverse().join(''))
