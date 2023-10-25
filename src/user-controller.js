const User = require('./user-model.js');

const getUsers = async (req, res) => {
    let users = [];
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

const deleteUsers = async (req, res) => {
    let users = [];
    if (req.params.name) {
        users = await User.find({name:req.params.name});
    }

    if (users.length !== 0) {
        await User.deleteOne({name:req.params.name})
        res.send(`${req.params.name} was deleted`);
    } else {
        await User.deleteMany({});
        res.send("All users were deleted");
    } 
}

module.exports = {
    getUsers,
    createUsers,
    deleteUsers,
}