const cutIt = (arr) =>
	arr.map((el) => el.slice(0, Math.min(...arr.map((el) => el.length))))
