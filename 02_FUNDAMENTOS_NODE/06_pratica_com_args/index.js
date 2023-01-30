const minimist = require('minimist')
// modulos externos 
const args = minimist(process.argv.slice(2))

//modulos internos 
const soma = require('./soma').soma 

const a = args['a']
const b = args ['b']

soma(a,b)