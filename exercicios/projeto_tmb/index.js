const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const mysql = require('mysql')

app.engine('handlebars',exphbs.engine())

app.set('view engine','handlebars')
app.use(express.static('public'))

app.get('/',(req,res)=>{

   res.render('home')
})
app.get('/user/dieta',(req,res)=>{

    res.render('plano') 
})
const conn = mysql.createConnection({
    host:'locahost',
    user:'root',
    password:'',
    database:'tmbmysql',
 
}) 

app.listen(3000,console.log('tudo ok '))  