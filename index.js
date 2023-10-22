const http = require('http')
const PORT = process.env.PORT || 5000;

const server = http.createServer((req,res)=>{
    res.end('Hi')
})

server.listen(PORT, ()=>console.log('Started on:' + PORT))