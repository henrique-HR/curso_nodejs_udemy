import http from 'http'
import fs, { rmSync, writeFile } from 'fs'
import url from 'url'


const port = 3000

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true)
    const filen = query.pathname.substring(1)
    if (filen.includes('html')) {
        if (fs.existsSync(filen)) {
            fs.readFile(filen, (err, data) => {
                if (err) {
                    throw err;
                }
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write(data)
                return res.end()
            })
        } else {
            fs.readFile('404.html',(err,data)=>{
                res.writeHead(404 , {'content-type':'text/html'})
                res.write(data)
                return res.end()
            })

        }
    }

})
server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log('servidor rodando')
})