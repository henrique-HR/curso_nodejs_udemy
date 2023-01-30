const path = require('path')
const express = require('express')
const port = 3000
const app = express()

//ler body

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

const basepath = path.join(__dirname, 'templates')

app.get('/users/add',(req,res)=>{
    res.sendFile(`${basepath}/userform.html`)
})
app.post('/users/save',(req,res)=>{
   
    const name = req.body.nome
    const age = req.body.age
    console.log(`ò nome  do usuario é ${name} e sua idade ${age}`)
    
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id
    console.log('estamos buscando pelo usuario ', id)
    res.sendFile(`${basepath}/users.html`)
})

app.get('/',(req,res)=>{
    res.sendFile(`${basepath}/index.html`)
})
app.listen(port,()=>{ 
    console.log('servidor rodando na porta',port)
})
