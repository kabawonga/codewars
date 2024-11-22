Array.prototype.remove_ = (integer_list, values_list) =>
	integer_list.filter((el) => !values_list.includes(el))
