const catMouse = (x) =>
	x.indexOf('m') - x.indexOf('C') <= 4 ? 'Caught!' : 'Escaped!'
