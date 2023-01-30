import inquirer from 'inquirer'


inquirer.prompt([{
    name:'p1',
    message:'qual a primeira nota ? '
},{
    name:'p2',
    message: 'qual a segunda nota ?'
}]).then((answers)=>{
    console.log(answers)
    let p1 = parseInt(answers['p1'])
    let p2 = parseInt(answers['p2'])
        console.log(p1 + p2)
}).catch(err => console.log(err +' code error'))