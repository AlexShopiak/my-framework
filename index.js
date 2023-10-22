const http = require('http');
const EventEmitter = require('events');

const PORT = process.env.PORT || 5000;
const emitter = new EventEmitter()

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
        emitter.on(`[${path}]:[${method}]`, (req, res) => handler(req, res));
    }
}

const server = http.createServer((req,res)=>{
    res.end('Hi')
})

server.listen(PORT, () => console.log('Started on:' + PORT));