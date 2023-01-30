const fs = require('fs')


const folder = 'minha_pasta'
if(!fs.existsSync('./'+folder)){
    
    fs.mkdirSync(folder)
    console.log(`folder ${folder} was created  successfully`)  
}else if(fs.existsSync('./'+folder)){
    console.log('ja existe a pasta '+ folder)
}