const express = require('express')
const app = express()
const path = require('path')
const port = 5000
const user = require('./users')

const basepath = path.join(__dirname ,"paginas")

app.use(express.static('public'))

app.use('/users',user)

app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile((`${basepath}/index.html`))
})
app.use(function(req,res,next){
    res.status(404).sendFile(basepath+"/404.html")
    
})

app.listen(port,console.log( `servido rodando em http://localhost:${port}`))