const crap = (x, bags, cap) =>
	x.flat().includes('D')
		? 'Dog!!'
		: x.flat().filter((c) => c == '@').length <= bags * cap
		? 'Clean'
		: 'Cr@p'
