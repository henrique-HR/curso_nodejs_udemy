const path = require('path')
const express = require('express')

const port = 3000
const app = express()

const basepath = path.join(__dirname, 'templates')

const checkauth = function(req,res,next){
    req.authStatus = false
    if(req.authStatus){
        console.log('esta logado pode continuar')
        next()
    }else{
        console.log('nao esta logado, faça login para continuar')
        next()
    }

}
app.use(checkauth)

app.get('/',(req,res)=>{
    res.sendFile(`${basepath}/index.html`)
    
})
app.listen(port,()=>{ 
    console.log('servidor rodando na porta',port)
})