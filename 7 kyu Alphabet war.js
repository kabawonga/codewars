const alphabetWar = (fight) => {
	const left = { w: 4, p: 3, b: 2, s: 1 }
	const right = { m: 4, q: 3, d: 2, z: 1 }

	let score = 0

	for (let char of fight) {
		if (left[char]) score += left[char]
		if (right[char]) score -= right[char]
	}

	return score > 0
		? 'Left side wins!'
		: score < 0
		? 'Right side wins!'
		: "Let's fight again!"
}
