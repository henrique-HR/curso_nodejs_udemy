
const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const Task = require('./models/Task')
const app = express()
const taskRoutes = require('./routes/taskRoutes')

 
app.engine('handlebars', exphbs.engine()
)
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use('/tasks/',taskRoutes)

conn.sync().then(app.listen(3000,console.log('conectado ao banco nodemvc'))).catch(err=>console.log(err))
  
    


