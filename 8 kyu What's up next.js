const nextItem = (xs, item) => {
	let res = false

	for (const i of xs) {
		if (res) {
			return i
		}

		if (i == item) {
			res = true
		}
	}
}
