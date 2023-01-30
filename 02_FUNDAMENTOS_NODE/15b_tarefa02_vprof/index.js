import chalk from "chalk"; 
import inquirer from "inquirer";
inquirer.prompt([
    {name: 'nome', message:' qual é  o sue nome ?'} ,
    {name: 'idade' , message: 'qual a sua idade ?'}]).then((answers)=>{
        const resposta = ` o  nome é ${answers.nome} e a idade é ${Number(answers.idade)}`
        console.log(resposta)  
    }).catch(err=>{
        console.log(err)
    })

