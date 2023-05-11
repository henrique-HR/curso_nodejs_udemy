

const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const app  = express()
const User = require('./models/User')
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')
app.use( express.urlencoded({
    extended:true , 
}))
app.use(express.static('public'))
app.use(express.json())

app.get('/',(req,res)=>{  
    res.render('home')   
}) 


conn.sync().then(()=>{
    app.listen(3000)
}).catch(err=>console.log(err)) 