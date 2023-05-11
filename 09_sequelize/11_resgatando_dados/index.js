const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const User = require("./models/User")
const Address = require('./models/address')

const app  = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')
app.use( express.urlencoded({
    extended:true , 
}))
app.use(express.static('public'))
app.use(express.json())

app.post('/address/create',async(req,res)=>{

  const UserId = req.body.UserId
  const city = req.body.city
  const street = req.body.street
  const number = req.body.number

  const address = {
    
    street, 
    number,
    city,
    UserId,
  }
  
  await Address.create(address) 
  
  res.redirect(`/users/edit/:${UserId}}`)
})
app.get('/users/edit/:id', async(req,res)=>{
  const id = req.params.id 
 
  try{
  const user = await User.findOne ({include:Address, where:{id:id}})
  
  res.render('useredit', {user: user.get({ plain :true}) }) 
  }
  catch(error){
    console.log(error)  
  }
     
  })
app.post('/user/edit',async (req,res)=>{

      const id = req.body.id 
      const name = req.body.name 
      const occupation = req.body.occupation 
      let newsletter = req.body.newsletter

      if(newsletter === 'on'){
        newsletter = true
      }else{
        newsletter = false
      }
      const userdata = {
        id,
        name,
        occupation, 
        newsletter
      }
      await User.update( userdata, {where:{id:id}})

        res.redirect('/')  

})
  
app.get('/user/create',(req,res)=>{
  res.render('adduser')    
})
app.post('/user/create',(req,res)=>{
    const name = req.body.name 
    const occupation = req.body.occupation
  let newsletter = req.body.newsletter
   
  if(newsletter === "on"){
    newsletter = true
  }else{
    newsletter = false
  }
   User.create({name,occupation,newsletter})  
     
   res.redirect('/')
})
app.get('/users/:id',async(req,res)=>{
  // const id = req.params.id

  // const user= await User.findOne({raw : true ,where:{id:id}
  // }) 
  const id = req.params.id 
 
  try{
  const user = await User.findOne ({include:Address, where:{id:id}})
  
  res.render('userview', {user: user.get({ plain :true}) }) 
  }
  catch(error){
    console.log(error)  
  }
  
})
app.post('/users/delet/:id',async(req,res)=>{
const id = req.params.id
await User.destroy({where:{id:id}}) 

res.redirect('/')
}) 
app.get('/',async(req,res)=>{ 
  
  const users = await User.findAll({raw:true})
  res.render('home',{ users:users})    
}) 

conn.sync().then(()=>{
    app.listen(3000,console.log('http://localhost:3000')) 
}).catch(err=>console.log(err))  


// conn.sync({force:true}).then(()=>{
//   app.listen(3000,console.log('http://localhost:3000')) 
// }).catch(err=>console.log(err))      