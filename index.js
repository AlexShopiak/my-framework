const http = require('http');
const PORT = process.env.PORT || 5000;

class Router {
    constructor() {
        this.endpoint = {};
    }
    request(method='GET', path, handler) {
        if(!this.endpoint[path]) {
            this.endpoint[path] = {};
        }
        const endpoint = this.endpoint[path];
        if(endpoint[method]) {
            throw new Error(`[${method}] on adress [${path}] already exists`);
        }
        endpoint[method] = handler;
        //events
    }
}

const server = http.createServer((req,res)=>{
    res.end('Hi')
})

server.listen(PORT, () => console.log('Started on:' + PORT));