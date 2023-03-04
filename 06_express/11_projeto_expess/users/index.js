const express = require('express')
const Router= express.Router()
const path = require('path')

const basepath = path.join(__dirname,'../paginas')

Router.get('/users',(req , res)=>{
    res.sendFile(`${basepath}/users.html`)
})

Router.get('/add',(req , res)=>{
    res.sendFile(`${basepath}/add.html`)
})

Router.get('/id',(req , res)=>{
    res.sendFile(`${basepath}/id.html`)
})

module.exports = Router 