const Application = require('./framework/application.js');
const Router = require('./framework/router.js');

const PORT = process.env.PORT || 5000;

const app = new Application();
const router = new Router();

router.get('/users', (req, res) => {
    res.end('Hi from users');
})

router.get('/posts', (req, res) => {
    res.end('Hi from posts');
})

app.addRouter(router);
app.listen(PORT, () => console.log('Started on:' + PORT))