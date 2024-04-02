const periodIsLate = (last, today, cycleLength) =>
	Math.floor(today.getTime() - last.getTime()) / 86400000 > cycleLength
