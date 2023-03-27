import  express  from "express";
import exphbs from "express-handlebars"
const app = express()

const hbs = exphbs.create({
partialsDir:['views/partials']

})

app.engine('handlebars',hbs.engine)
app.set( 'view engine','handlebars')
app.use(express.static('public'))


const itencell =[
    { 
        title:"cell",
    id:"0",
    model : "moto g10 play ",
    category: "phone",
    assessments:"5",
    price:1200.00,
    recomendacoes: "9/10"
    ,coments : [{ 1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo ea corrupti ut unde at aut magnam debitis quasi repellendus iste, deserunt laudantium. Maxime nostrum harum perspiciatis tempore ullam libero! "},{2:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo ea corrupti ut unde at aut magnam debitis quasi repellendus iste, deserunt laudantium. Maxime nostrum harum perspiciatis tempore ullam libero!"},]
},{ 
    title:"cell",
    id:"1",
    model :"sansung s10",
    category :"phone",
    assessments:"5",
    price:"650.00",
    recomendacoes:"8/10",
},{ 
    title:"cell",
    id:"2",
    model :"sansung s20",
    category :"phone",
    assessments:"5",
    price:"1650.00",
    recomendacoes:"8/10",
},{
    id:"3",
    model :"sansung A10",
    category :"phone",
    assessments:"5",
    price:"250.00",
    recomendacoes:"2/10",
},{ 
    title:"cell",
    id:"4",
    model :"xaomi mi9",
    category :"phone",
    assessments:"5",
    price:"650.00",
    recomendacoes:"8/10",
}

]
const itentv =[
    {
        id:"0",
        model:'SANSUNG',
        category:'tv',
        assessments:'5 :⭐⭐⭐⭐⭐',
        price:2165.00},

    {
        id:"1",
        model:'CCE',
        category:'tv',
        assessments:'5 :⭐⭐⭐⭐⭐',
        price:4165.00},
    
    {
        id:"2",
        model:'LG',
        category:'tv',
        assessments:'5 : ⭐⭐⭐⭐⭐' ,
        price:3165.00},
    
    {
        id:"3",
        model:' AOC',
        category:'tv',
        assessments:' 3 : ⭐⭐⭐',
        price:1165.00}
]
const itenconsole =[
        {
            id:"0",
            model : "playstation 5",
            category: "game",
            assessments:"5",
            price:4.99400,
            recomendacoes: "9/10"
        },
        {
            id:"1",
            model : "playstation 4",
            category: "game",
            assessments:"5",
            price:2594.00,
            recomendacoes: "9/10"
        },
        {
            id:"2",
            model : "xbox one ",
            category: "game",
            assessments:"5",
            price:3994.00
            ,recomendacoes: "7/10"
        },
        {
            id:"3",
            model : "xbox 360",
            category: "game",
            assessments:"5",
            price:994.00,
            recomendacoes: "2/10"
        },
]

app.get('/tvs',(req,res)=>{
    res.render('tvs',{itentv})
})
app.get("/games",(req,res)=>{
    res.render("games",{itenconsole})
})
app.get("/phones",(req,res)=>{
 res.render("phones",{itencell})
})
app.get("/tv/:id",(req,res)=>{

    var produtos = itentv[req.params.id]
   
       res.render("tv",{produtos})  
})
app.get("/phone/:id",(req,res)=>{

    var produtos = itencell[req.params.id]
   
       res.render("phone",{produtos})  
})
app.get("/game/:id",(req,res)=>{
    var produtos = itenconsole[req.params.id]
   
       res.render("game",{produtos}) 
})
app.get("/",(req,res)=>{ 

    res.render('home')  
   
})

app.listen(3000,console.log('tudo ok '))