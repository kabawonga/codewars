const removeRotten = (bagOfFruits) =>
	bagOfFruits
		? bagOfFruits.map((el) =>
				el.includes('rotten') ? el.replace('rotten', '').toLowerCase() : el
		  )
		: []
