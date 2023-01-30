import path from 'path'
//absoluto
console.log(path.resolve('text.txt'))
// formar path

const myfolder = 'relatorio'
const filename ='henrique.txt'

const fimpath = path.join('/','arquivos', myfolder , filename)
console.log(fimpath)