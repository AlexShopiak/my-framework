const User = require('./user-model.js');

const getUsers = async (req, res) => {
    let users;
    if (req.params.name) {
        users = await User.find({name:req.params.name});
    } else {
        users = await User.find();
    }

    if (users.length == 0) {
        res.send("User does not exist");
    } else {
        res.send(users);
    }
    
}

const createUsers = async (req, res) => {
    const user = await User.create(req.body);
    res.send(user);
}

module.exports = {
    getUsers,
    createUsers,
}