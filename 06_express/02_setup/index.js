import express from 'express'
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send(`ola mundo !!`)
})
app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`)
})