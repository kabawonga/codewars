const add = (num1, num2) => {
	let [longArr, shortArr] = [String(num1), String(num2)]
	if (shortArr.length > longArr.length) {
		;[longArr, shortArr] = [shortArr, longArr]
	}
	const head = longArr.slice(0, longArr.length - shortArr.length)
	const tail = longArr
		.slice(-shortArr.length)
		.split('')
		.map((digit, index) => Number(digit) + Number(shortArr[index]))
		.join('')
	return Number(head + tail)
}
