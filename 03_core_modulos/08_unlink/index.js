import fs from 'fs'

fs.unlink('arquivo.txt',function(err){
    if(err){
        throw err;
    }
  console.log('arquivo removido')  
})