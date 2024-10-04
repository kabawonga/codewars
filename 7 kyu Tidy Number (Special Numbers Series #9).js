const tidyNumber = (n) =>
	[...String(n)].every((el, i, arr) => i == 0 || arr[i] >= arr[i - 1])
