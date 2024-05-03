const flickSwitch = (arr) => {
	let flag = true
	return arr.map((el) => (el === 'flick' ? (flag = !flag) : flag))
}
