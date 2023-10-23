const Router = require('../framework/router.js');
const router = new Router();

const users = [
    {id: 1, name: 'Till'},
    {id: 2, name: 'Richard'},
    {id: 3, name: 'Paul'},
    {id: 4, name: 'Christoph'},
    {id: 5, name: 'Flake'},
    {id: 6, name: 'Oliver'},
]

router.get('/users', (req, res) => {
    res.send(users);
})

router.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(user);
})

module.exports = router