const http = require("http")
const port = 3000
const server = http.createServer((req,res)=>{
    
    res.write("ola mundo !")
    res.end()
})

server.listen(port,()=>{
    
    console.log(`servidor rodando a porta ${port}`)
})