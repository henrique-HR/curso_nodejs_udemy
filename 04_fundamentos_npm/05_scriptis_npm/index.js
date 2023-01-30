import _ from'lodash'
import chalk from'chalk'
const a = [1,2,3,4]
const b = [5,6,3,7,8,1]

const diff = _.difference(a,b)
console.log(chalk.red.bgWhite(diff))
/**
 * npm update -> package <- atualiza o pacote especificado 
 *npx npm-check  updates -U checa todos os pacotes que precisam se atualizaçao 

 npm --save-dev ->pacote<- coloca o pacote selecionados na lista de dependecia de desenvolvimento 
 */