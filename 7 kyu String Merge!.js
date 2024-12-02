const stringMerge = (s1, s2, l) =>
	s1.slice(0, s1.indexOf(l) + 1) + s2.slice(s2.indexOf(l) + 1)
