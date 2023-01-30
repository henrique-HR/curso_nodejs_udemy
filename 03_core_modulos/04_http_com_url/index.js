import url from 'url'
import http from 'http'
const port = 5000
const server = http.createServer((req,res)=>{
    const urlinfo = url.parse(req.url,true)
    const name = urlinfo.query.name 

    res.statusCode = 200
    res.setHeader('content-type','text/html')
    if(!name){
        res.end(`<h1>preencha seu nome </h1><form method="GET">
            <input type="text" name="name">
            <input type="submit" value="envia">
        </form>`)
    }else{
        if(name==='cauê'|| name === 'caue'){
            res.end(`<h1>seja bem vindo ${name} seu viadinho safado !!!</h1>`) 
        }else{
        res.end(`<h1>seja bem vindo ${name}</h1>`)
        }
    }
})

server.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`)
})