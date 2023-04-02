const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const mysql = require('mysql')

app.engine('handlebars',exphbs.engine())
app.set("view engine",'handlebars')
app.use(express.static('public'))

const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'nodemysql'
})

conn.connect(function(err){
    if(err){
        console.log(err)
    }
    app.listen(3000,console.log('conectado ao mysql'))
})