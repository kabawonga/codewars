const seven = (m, s = 0) =>	m < 100 ? [m, s] : seven(Math.floor(m / 10) - 2 * (m % 10), s + 1)
