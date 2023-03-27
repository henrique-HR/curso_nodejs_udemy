import express from "express"
import exphbs from "express-handlebars"
const app = express()
const hbs = exphbs.create({
partialsDir:['views/partials'],
})

app.engine('handlebars',hbs.engine)
app.set('view engine','handlebars')


app.get("/post",(req,res)=>{

    const post ={
        title:'app com node' , 
        category:"java script",
        coments:"aqui voce aprendera a realizar trabalhos e elaborar projetos com node-js"
    }
    res.render('blogpost',{post})
})
app.get('/blog',(req,res)=>{
    const posts = [
    {title:'aprender node.js',
        category:'java-script',
        body:'teste',
        coments:'4'
    },{title:'aprender php ',
    category:'php',
    body:'teste',
    coments:'4'
    },{title:'aprender python',
    category:'python',
    body:'teste',
    coments:'4'
    },
    ]

    res.render('blog',{posts})
    
})

app.get('/',(req,res)=>{

    res.render('home')


})
app.listen(3000,console.log('app funcionando'))