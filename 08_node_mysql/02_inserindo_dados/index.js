const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const mysql = require('mysql')

app.engine("handlebars" , exphbs.engine())
app.set('view engine','handlebars')

app.use(express.static('public'))

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())


app.get('/',(req,res)=>{

    res.render('home')
})

app.post('/book/insertbooks',(req,res)=>{
    const title = req.body.title
    const pagesqt = req.body.pagesqt
    console.log(title,pagesqt)
    const query = `INSERT INTO books (title, pagesqt) VALUES( '${title}', '${pagesqt}') `
    
    

    conn.query(query,function(err){
        if(err){
            throw err; 
        }
        res.redirect('/')
    })
})

const conn = mysql.createConnection({
    host :'localhost',
    user:'root', 
    password:'',
    database:'nodemysql'     
})

conn.connect(function(err){
    if(err){
        console.log(err)
    }
    app.listen(3000,console.log('conectado ao banco de dados '))
})
 


