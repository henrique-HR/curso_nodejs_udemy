import url from 'url'
import fs from 'fs'
import http from 'http'
const port = 3000

const server = http.createServer((req,res)=>{
    const urlinfo = url.parse(req.url,true)
    const nome = urlinfo.query.nome
    if(!nome){
        fs.readFile('index.html',function(err,data){
            if(err){
                throw err;
            }
        res.writeHead(200,{'contente-type':'text/html'})
        res.write(data)
            return res.end()

        })
    }else{
        const nomenew = nome + ',\r\n'

        fs.appendFile('arquivo.txt',nomenew,function(err,data){
           res.writeHead(302,{
                Location : '/'
           })
           return res.end()
        })
        
    } 
})
server.listen(port,()=>{
    console.log('rodando na porta '+port)
})