const declareWinner = (f1, f2, fA) =>
	Math.ceil(f1.health / f2.damagePerAttack) <
	Math.ceil(f2.health / f1.damagePerAttack)
		? f2.name
		: Math.ceil(f2.health / f1.damagePerAttack) <
		  Math.ceil(f1.health / f2.damagePerAttack)
		? f1.name
		: fA
