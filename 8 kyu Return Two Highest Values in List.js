const twoHighest = (arr) => [...new Set(arr.sort((a, b) => b - a))].slice(0, 2)
