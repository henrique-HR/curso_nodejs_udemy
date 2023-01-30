const fs = require('fs')

console.log('inicio')

fs.writeFile('arquivo2.txt','segundo arquivo criado durante a aula ', function(err){
    setTimeout(function(){
        console.log('arquivo criado')
    },2000)
    

})


console.log('fim ')