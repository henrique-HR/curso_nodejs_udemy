const _ = require('lodash')

const a = [1,2,3,4]
const b = [5,6,3,7,8,1]

const diff = _.difference(a,b)
console.log(diff)