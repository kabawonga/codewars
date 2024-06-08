let obj = { A: 'T', T: 'A', C: 'G', G: 'C' }
const dnaStrand = (dna) => dna.replace(/./g, (el) => obj[el])
