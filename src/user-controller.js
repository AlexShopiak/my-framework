const users = [
    {id: 1, name: 'Till'},
    {id: 2, name: 'Richard'},
    {id: 3, name: 'Paul'},
    {id: 4, name: 'Christoph'},
    {id: 5, name: 'Flake'},
    {id: 6, name: 'Oliver'},
]

const getUsers = (req, res) => {
    if (req.params.id) {
        return res.send(users.find(user => user.id == req.params.id))
    }
    res.send(users);
}

const createUsers = (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(user);
}

module.exports = {
    getUsers,
    createUsers,
}