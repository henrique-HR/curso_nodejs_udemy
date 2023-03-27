const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/dashboard',(req,res)=>{
    const user = {
        name:'henrique',
        category:'macho alfa ',
        funcoes:{f1:'proteger',f2: 'procriar'},
        
    }
    res.render('dashboard',{user})
})
app.get('/post',(req,res)=>{

    const post = {
        title:"aprender nodejs",
        category :"java-srcipt",
        body:"este post te ajuda a aprender java script",
        coments:5,

    }
    res.render('blogpost', { post })

})
app.get('/',(req ,res)=>{

    const user = {
        nome:"henrique",
        idade:"30",
        nasc:"92"
    }
    res.render('home',{user:user})
})


app.listen(3000,console.log('tudo ok aqui '))