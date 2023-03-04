import express  from "express"
import exphbs from "express-handlebars"
const app = express()

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/', (req,res)=>{

const user = {
    name:'henrique',
    lastname: 'gomes',
    age:30
}
   
    res.render('home',{user:user})
})
app.listen(3000,console.log('tudo ok até aqui !!!'))
