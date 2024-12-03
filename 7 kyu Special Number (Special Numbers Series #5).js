const specialNumber = (n) =>
	[...String(n)].every((d) => '012345'.includes(d)) ? 'Special!!' : 'NOT!!'
