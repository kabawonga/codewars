const howMuchWater = (water, load, clothes) =>
	clothes > 2 * load
		? 'Too much clothes'
		: clothes < load
		? 'Not enough clothes'
		: +(water * 1.1 ** (clothes - load)).toFixed(2)
