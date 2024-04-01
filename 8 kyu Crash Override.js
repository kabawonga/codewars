const aliasGen = (fName, sName) => {
	if (
		fName[0].toUpperCase() in firstName &&
		sName[0].toUpperCase() in surname
	) {
		return `${firstName[fName[0].toUpperCase()]} ${
			surname[sName[0].toUpperCase()]
		}`
	} else {
		return 'Your name must start with a letter from A - Z.'
	}
}
