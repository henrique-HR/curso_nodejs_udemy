import express from "express"
import exphbs from "express-handlebars"
const app = express()

app.engine('handlebars' , exphbs.engine())

app.set('view engine','handlebars')


app.get('/',(req,res)=>{
    const user = {
        name:'henrique',
        age : 30,
        lastname: 'gomes'
    }
    const auth = true 
    const palavra = 'teste'

    res.render('home', {user:user, palavra,auth})
})
app.get("/dashboard", (req,res)=>{
    const user = {
        name:'henrique',
        age : 30,
        lastname: 'gomes'
    }
    res.render("dashboard", {user:user})
})
app.listen(4000 ,console.log('tudo ok '))