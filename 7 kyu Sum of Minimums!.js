const sumOfMinimums = (arr) => arr.reduce((acc, el) => acc + Math.min(...el), 0)
