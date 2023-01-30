import fs from 'fs'
import http from 'http';
const port = 3000
const server = http.createServer((req,res)=>{
    
   fs.readFile('msg.html',(err,data)=>{
    if(err){
        throw err ;
    }
    res.writeHead(200,{'content-type':'text/html'})
    res.write(data)
    return res.end()
   })

})
server.listen((port),()=>{
    console.log(`servidor rodando na port:${port}`)
})