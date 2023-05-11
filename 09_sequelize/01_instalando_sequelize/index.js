const conn = require('./db/conn').default

const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.use( express.urlencoded({
    extended:true , 
}))
app.use(express.static('public'))
app.use(express.json())

app.get('/',(req,res)=>{  
    res.render('home')   
}) 

app.listen(3000,console.log('servidor rodando em http://localhost:3000'))
   