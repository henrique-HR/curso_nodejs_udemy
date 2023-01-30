const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('qual a sua linguagem preferida ',(language)=>{
    if(language ===  'html e css'){
        console.log(' sinto informar mas isso não é linguagem de programaçao')
    }else {
    console.log(`a minha linguagem preferida é ${language}`)
    }
   rl.close()
} )
