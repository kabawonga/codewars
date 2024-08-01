const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) =>
	enteredCode === correctCode &&
	new Date(currentDate) <= new Date(expirationDate)
