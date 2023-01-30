
import readline from 'readline'
import chalk from 'chalk'

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    input: process.stdin,
    output: process.stdout
    
})

r1.question('qual seu nome ?',nome=>{

    if(nome ==='caue'){
        throw chalk.bgRed('desculpe mas nao aceitamos vadinhos aqui !!! XAU BICHONA ')
    }
    r1.question('qual sua idade ',idade =>{
        r1.question ('qual é o nome da sua mãe ? ', mae =>{

            console.log(`seu nome é ${chalk.bgYellow.black(nome)} e sua idade é ${chalk.bgYellow.black(idade)}`)
            console.log(`sua mae se chama ${mae}`)
        r1.close()


        })
    }) 
})
/** */