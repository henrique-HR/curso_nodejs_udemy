import fs from 'fs'
import http from 'http'
import url from 'url'
const port = 3000

const server = http.createServer((req,res)=>{
    
    const urlinfo = url.parse(req.url,true)
    const nome = urlinfo.query.name

    if(!nome){
        fs.readFile('index.html', function(err,data){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        return res.end()
       })
    }else{
        fs.writeFile('arquivo.txt',nome,function(err,data){
            res.writeHead(302,{
                location:'/'
            })
            return res.end()
        })
    }
})
server.listen(port,()=>{
    console.log(`rodando na porta ${port}`)
})