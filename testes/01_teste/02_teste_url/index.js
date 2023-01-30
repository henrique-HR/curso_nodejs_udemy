import fs from 'fs'
import url from 'url'
import http from 'http'
const PORT = 3000

const Server = http.createServer((req, res) => {
    const query = url.parse(req.url,true)
    const filename = query.pathname.substring(1)
    if (fs.existsSync(filename)) {
        if (filename.includes('html')) {
            fs.readFile(filename, function (err, data) {
                if (err) {
                    throw err;
                }
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write(data)
                res.end()
            })
        }
    } else {
        fs.readFile('error.html',function(err,data){
            res.writeHead(404,{'constent-type':'text/html'})
            res.write(data)
            res.end()
        })

    }


})
Server.listen(PORT, () => { console.log('servidor rodando na porta:' + PORT) })

