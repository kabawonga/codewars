const findDeletedNumber = (arr, mixArr) =>
	arr.reduce((acc, el) => acc + el, 0) - mixArr.reduce((acc, el) => acc + el, 0)
