const mysql =  require('mysql')

const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')
app.use( express.urlencoded({
    extended:true , 
}))
app.use(express.static('public'))
app.use(express.json())

app.get('/',(req,res)=>{  
    res.render('home')  
}) 
app.get('/books',(req,res)=>{
    const query = "SELECT * FROM  books"
    conn.query(query,function(err,info){
        if(err){
            throw err;
        }
        
      res.render('books',{info})
    })
   
    
}) 

app.post('/book/insertbooks',(req,res)=>{
    const title = req.body.title
    const pagesqt = req.body.pagesqt
    const query =`INSERT INTO books (title , pagesqt)values ('${title}','${pagesqt}') `

    conn.query(query,function(err){
        if(err){
            throw err;
        }
    })
    res.redirect('/')
})
 
app.get('/book/:id',(req,res)=>{
    const id = req.params.id
    const query = `SELECT * FROM books where id = ${id}`
    conn.query(query,function(err,data){
        if(err){
            throw err;
          
        }
        const book =data[0]
        res.render('book',{book})
    })
})
app.get('/books/deletar/:id',(req,res)=>{
    const id = req.params.id
    const query = `DELETE FROM  books where id = ${id}`
    conn.query(query,function(err){
        if(err){ 
            throw err ;
        }
        
        res.redirect('/books')  
        
     
    })  
    

})
app.get('/books/edit/:id',(req,res)=>{

    const id = req.params.id
    const sql = `SELECT * FROM books where id = ${id}`
    conn.query(sql, function(err,data){
        if(err){
            throw err;

        }
        const book = data[0]
        res.render('editbook',{book})
    }) 
})
app.post('/books/conf',(req,res)=>{

    const id = parseInt(req.body.id)
    const title = req.body.title
    const pagesqt =  req.body.pagesqt

   const sql = `UPDATE books SET title = '${title}', pagesqt = ${pagesqt} where id = ${id}`
 
    conn.query(sql, function(err){
        if(err){  
            throw err ;   
 
        }  
        
       
     
    }) 
       
    res.redirect('/books')
})

const conn = mysql.createConnection({
    host:'localhost', 
    user:'root',
    password:'',
    database:'nodemysql' 
})

conn.connect(function(err){
    if(err){
        throw err;
    }
    app.listen(3000,console.log('banco conectado em http://localhost:3000'))
})


