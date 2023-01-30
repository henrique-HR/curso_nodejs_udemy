
//nome 

const argumentos = process.argv.slice(2)


const nome = argumentos[0].split('=')
console.log(nome[1])
const idade = argumentos[1].split('=')

console.log(idade[1])

const vetor = ['nome:henrique idade:30 sexo:m','nome:ana idade:56 sexo:f']
const n = vetor.slice(1)

let nome1 = n[0].split(' ') 


// console.log(nome1[2].split(':'))
