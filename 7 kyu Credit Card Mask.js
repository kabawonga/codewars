const maskify = (cc) =>
	cc.split('').length > 4 ? cc.slice(-4).padStart(cc.length, '#') : cc
