const splitInParts = (s, pL) => s.match(new RegExp(`.{1,${pL}}`, 'g')).join(' ')
