const chalk = require('chalk')
const nota = 6

if(nota >=7 && nota <= 10){console.log(chalk.bgGreen('parabens! voce foi aprovado '))}else if (nota > 5 && nota < 7){
    console.log(chalk.bgYellow.red('recuperação'))
}else if (nota <= 5){
    console.log(chalk.bgRed('reprovado seu merda '))
}