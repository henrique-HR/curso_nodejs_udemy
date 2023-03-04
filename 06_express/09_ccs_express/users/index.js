const express= require('express')
const { appendFile } = require('fs')
const Router = express.Router()
const path = require('path')


const basepath = path.join(__dirname, '../templates')


Router.get('/add',(req,res)=>{
    res.sendFile(`${basepath}/userform.html`)
})
Router.post('/save',(req,res)=>{
   
    const name = req.body.name
    const age = req.body.age
    console.log(`ò nome  do usuario é ${name} e sua idade ${age}`)
     
})

Router.get('/:id',(req,res)=>{
    
    const id = req.params.id
    console.log('estamos buscando pelo usuario ',id)
    res.sendFile(`${basepath}/users.html`)
})

module.exports = Router