const path = require('path')
const express = require('express')
const port = 3000
const app = express()

const basepath = path.join(__dirname, 'templates')


app.get('/',(req,res)=>{
    res.sendFile(`${basepath}/index.html`)
    
})
app.listen(port,()=>{
    console.log('servidor rodando na porta',port)
})