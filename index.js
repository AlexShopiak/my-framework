//const http = require('http');
//const EventEmitter = require('events');
const Router = require('./framework/router.js');

const PORT = process.env.PORT || 5000;
//const emitter = new EventEmitter()
const router = new Router();

router.get('/users', (req, res) => {
    res.end('Hi from users');
})

router.get('/posts', (req, res) => {
    res.end('Hi from posts');
})

//const server = http.createServer()

server.listen(PORT, () => console.log('Started on:' + PORT));