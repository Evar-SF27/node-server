const fs = require('fs')
const path = require('path')

// The createReadStream and createWriteStream reads and writes files in a faster manner
const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), 'utf-8')
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'new-lorem.txt'))

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

rs.pipe(ws)