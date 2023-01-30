const path = require('path')
const express = require('express')

const port = 3000
const app = express()

const basepath = path.join(__dirname, 'templates')



app.get('/users/:id',(req,res)=>{
    const id = req.params.id
    console.log('estamos buscando pelo usuario ',id)
    res.sendFile(`${basepath}/users.html`)
})

app.get('/',(req,res)=>{
    res.sendFile(`${basepath}/index.html`)
})
app.listen(port,()=>{ 
    console.log('servidor rodando na porta',port)
})