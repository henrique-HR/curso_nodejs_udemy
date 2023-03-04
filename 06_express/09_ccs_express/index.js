const express = require('express')
const port = 3000
const app = express()
const path = require('path')

const users = require('./users')
//ler body

const basepath = path.join(__dirname, 'templates')


app.use(
    express.urlencoded({
        extended: true,
    }),
)

//arquivos staticos ...
app.use(express.static('public'))
 

app.use(express.json())


app.use('/users',users)

app.get('/',(req,res)=>{
    res.sendFile(`${basepath}/index.html`)
})
app.listen(port,()=>{ 
    console.log('servidor rodando na porta',port)
})
