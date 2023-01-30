import chalk from 'chalk';
import inquirer from 'inquirer';
//modulo interno 
import fs, { existsSync } from 'fs'
let tent = 0

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'oque voce deseja fazer?',
        choices: [
            'criar conta',
            'depositar',
            'saldo',
            'sacar',
            'sair'
        ]
    }]).then((answer) => {
        options(answer)
    }).catch((err) => console.log(err))

}
//create acount <--
function creatAccount() {
    console.log(chalk.bgGreen.black('obrigado por escolher nosso banco '))
    console.log(chalk.green('preencha as opções abaixo para criação da sua conta!! '))
    buildAcount()
}
//set acount -- configuraçoes da conta 
function buildAcount() {
    inquirer.prompt([{
        name: 'accountname',
        message: 'escolha o nome da sua conta:'
    }]).then((answer) => {
        const accountName = answer['accountname']
        console.info(accountName)
        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }
        let erro = 0
        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('o nome de usuario ja esta em uso, por favor escolha outra  '))
            erro =1
            if(!verifyErr(erro)){
                console.log(chalk.bgRed.black('tente novamente mais tarde'))
                return operation()
            }
        
            return buildAcount()
        }
        fs.writeFileSync(`accounts/${accountName}.json`, `{"balance":0,"nome":"${accountName}"}`, function (err) {
            console.log(err)
        })
        console.log(chalk.green('conta criada com sucesso'))
        operation()

    }).catch((err) => console.log(err))
}
// see balance --ver saldo disponivel
function seeBalance() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'digite o nome da sua conta'
    }]).then((answer) => {
        const accountName = answer['accountName']
        if (!accountChecker(accountName)) {

            operation()

        } else {
            const conta = getAcount(accountName)

            console.log(`conta : ${accountName},\n saldo: ${conta.balance}`)


            setTimeout(operation, 5000);
        }


    }).catch(err => console.log(err))


}
// deposit cash -- depositar dinheiro na conta
function depositCash() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'qual é o nome da sua conta'
    }]).then((answer) => {
        const accountName = answer['accountName']
        
        if (!accountChecker(accountName)) {
                 operation()
        } else {
            inquirer.prompt([{
                name: 'nsaldo',
                message: 'digite o valor a ser depositado:'
            }]).then((answer) => {
                const amount = answer['nsaldo']
                // adiçao de saldo 
                addCash(amount, accountName)
            }).catch(err => console.log(err))
        }


    }).catch(err => console.log(err))
}
//logout-- sair da conta 
function logout() {
    console.log(chalk.bgGreen.black(' obrigado por ultilizar nossos serviços'))
    process.exit()
}
//checar conta 
function accountChecker(accountName) {

    if ((!fs.existsSync(`accounts/${accountName}.json`))) {
        console.log('essa conta nao existe')
        return false

    } else {
        return true
    }
}
// depositar 
function addCash(amount, accountName) {
    const conta = getAcount(accountName)

    if (!amount) {
        console.log(chalk.red('ocorreu um erro, tente novamente mais tarde !'))
        return depositCash()
    }
    conta.balance = parseFloat(amount) + parseFloat(conta.balance)
    fs.writeFileSync(`accounts/${accountName}.json`,
        JSON.stringify(conta),
        function (err) {
            console.log(err)
        }

    )
    console.log(`o valor de R$ ${amount} foi depositado com sucesso, seu saldo atual é de R$ ${conta.balance}`)
}
//pegar conta para validaçao
function getAcount(accountName) {
    const accountjson = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })
    return JSON.parse(accountjson)
}

// check login attemps -- verificar tentativas
function verifyErr(erro) {

    tent = tent + erro

    if (tent >= 3) {
        return false
    }
    return true
}
// withdraw -- sacar diheiro 
function withdraw(){

    inquirer.prompt([{
        name: 'accountName',
        message:'digite o nome da sua conta '
    }]).then((answer)=>{
        const accountName = answer['accountName']

        if(!accountChecker(accountName)){
            operation()
        }else{
            inquirer.prompt([{
                name: 'valorSacado',
                message: 'digite o valor que deseja sacar '
            }]).then((answer)=>{
                const valorSacado = answer['valorSacado']

                withDrawCash(accountName ,valorSacado)
            })
        }
    })
}
// funçao de saque 
function withDrawCash(accountName,valorSacado){
   const conta = getAcount(accountName)
    if(conta.balance < valorSacado){

        console.log('saldo insuficiente!!!')

       return withdraw()
    }else{
        conta.balance = parseFloat(conta.balance )- parseFloat(valorSacado)
        fs.writeFileSync(`accounts/${accountName}.json`,
        JSON.stringify(conta),
        function(err){
            console.log(err)
        })
        console.log(`o valor de ${valorSacado} foi retirado com sucesso!!! \n saldo atual é de ${conta.balance}`)   
    }
    
}
//opçoes
function options(answer) {
    const action = answer['action']
    if (action === 'criar conta') {
        creatAccount()
    } else if (action === 'saldo') {
        seeBalance()
    } else if (action === 'depositar') {
        depositCash()
    } else if (action === 'sacar') {
        withdraw()
    } else if (action === 'sair') {
        logout()
    }
}

operation()