const triangle = (row) =>
	row.length === 1
		? row[0]
		: triangle(
				[...row]
					.slice(0, -1)
					.map((c, i) =>
						c === row[i + 1] ? c : 'RGB'.replace(c, '').replace(row[i + 1], '')
					)
		  )
