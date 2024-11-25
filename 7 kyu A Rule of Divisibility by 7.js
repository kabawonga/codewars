const seven = (m, steps = 0) =>	m < 100 ? [m, steps] : seven(Math.floor(m / 10) - 2 * (m % 10), steps + 1)
