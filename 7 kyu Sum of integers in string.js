const sumOfIntegersInString = (s) =>
	(s.match(/\d+/g) || []).reduce((acc, num) => acc + Number(num), 0)
