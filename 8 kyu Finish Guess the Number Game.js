class Guesser {
	constructor(number, lives) {
		this.number = number
		this.lives = lives
	}

	guess(n) {
		if (this.lives > 0) {
			if (n === this.number) {
				return true
			} else {
				this.lives -= 1
				return false
			}
		} else {
			throw new Error()
		}
	}
}
