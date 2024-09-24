const halvingSum = (n) => (n == 0 ? 0 : n + halvingSum(Math.floor(n / 2)))
