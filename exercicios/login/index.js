const express = require('express')
const exphbs = require('express-handlebars')
const mysql= require('mysql')
const  app = express()

app.engine('handlebars',exphbs.engine())

app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/user/create',(req,res)=>{
    res.render('usercreate')
})
app.get('/',(req,res)=>{
    const user = {
        name:'henrique'
        ,id:'5'
    } 
    res.render('home',{user})
})
app.post('/user/acess/:id',(req,res)=>{
    const query = `CREATE TABLE users (
        'idusers' INT NOT NULL,
        'name VARCHAR(255) NULL,
        'email' VARCHAR(255) NOT NULL,
        'senha' VARCHAR(255) NOT NULL,
        UNIQUE INDEX 'idusers_UNIQUE' ('idusers' ASC));`
    conn.query(query,(err)=>{console.log(err)
    
    res.redirect('/')
})
})
const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'myproject'
})
conn.connect(function(err){ 
    if(err){ 
        throw err ;
    }
    app.listen(3000)
})
