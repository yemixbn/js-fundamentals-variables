const a = 8
const b = 10

const aNew = a ^ b
const bNew = aNew ^ b
const aFinal = aNew ^ bNew

module.exports = { a: aFinal, b: bNew }

console.log()
