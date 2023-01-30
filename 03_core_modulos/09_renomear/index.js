import fs from 'fs'
const arquiant = 'arquivo.txt'
const arquinov = 'novo.txt'



fs.rename(arquiant,arquinov,(err)=>{
    if(err){
        throw err;
    }
    console.log('arquivo alterado')
})

