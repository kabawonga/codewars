const explode = (s) => s.split('').reduce((acc, el) => acc + el.repeat(el), '')
