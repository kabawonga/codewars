const solution = (arr_val, arr_unit) => {
	const g = 6.67e-11
	const c = {
		kg: 1,
		g: 1e-3,
		mg: 1e-6,
		μg: 1e-9,
		lb: 0.453592,
		m: 1,
		cm: 1e-2,
		mm: 1e-3,
		μm: 1e-6,
		ft: 0.3048,
	}
	return (
		(g * arr_val[0] * c[arr_unit[0]] * arr_val[1] * c[arr_unit[1]]) /
		(arr_val[2] * c[arr_unit[2]]) ** 2
	)
}
