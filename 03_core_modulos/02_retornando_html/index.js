const http = require('http')
const port = 5000
const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('content-type','text/html')
    res.end('<h1>esse é meu primeiro server com html testando atualizaçao</>')
})

server.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`)
})