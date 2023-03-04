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
    const auth = false 
    const aprovado  = false

    res.render('home', {user:user, aprovado ,auth})
})
app.get("/dashboard", (req,res)=>{
    const user = {
        name:'henrique',
        age : 30,
        lastname: 'gomes'
    }
    res.render("dashboard", {user:user})
})
app.listen(3000 ,console.log('tudo ok '))