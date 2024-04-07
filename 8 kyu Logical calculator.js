const logicalCalc = (array, op) =>
	!!array.reduce((acc, item) =>
		op == 'AND' ? acc && item : op == 'OR' ? acc || item : acc ^ item
	)
