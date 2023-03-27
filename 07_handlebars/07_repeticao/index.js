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
    const aprovado  = true

    res.render('home', {user:user, aprovado ,auth})
})
app.get("/dashboard", (req,res)=>{

    const itens = ['item1 ','iten2','iten3']
    res.render("dashboard", {itens:itens})
})
app.listen(4000 , console.log('tudo ok ')) 