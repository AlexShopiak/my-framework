//TODO: res.send should only accept one type of data!!

const User = require('./user-model.js');

const getUsers = async (req, res) => {
    let result;
    if (req.params.name) {
        const users = await User.find({name:req.params.name});
        if (users.length == 0) {
            result = "User does not exist";
        } else {
            result = users;
        }
    } else {
        result = await User.find();
    }
    res.send(result);
}

const createUsers = async (req, res) => {
    let result;
    const users = await User.find({name:req.body.name});

    if (users.length == 0) {
        result = await User.create(req.body);
    } else {
        result = "User with this name already exists";
    }
    res.send(result);
}

const putUser = async (req, res) => {
    let result;
    if (req.params.name) {
        const users = await User.find({name:req.params.name});

        if (users.length !== 0) {
            await User.updateOne({name:req.params.name}, req.body);
            result = `${req.params.name} was updated`;
        } else {
            if (req.params.name == req.body.name) {
                result = await User.create(req.body);
            } else {
                result = "Invalid name in req.body";
            }
        }
    } else {
        result = "Sorry, but you have to pass a user name to update it";
    }
    res.send(result);
}

const deleteUsers = async (req, res) => {
    let result;
    if (req.params.name) {
        const users = await User.find({name:req.params.name});

        if (users.length !== 0) {
            await User.deleteOne({name:req.params.name})
            result = `${req.params.name} was deleted`;
        } else {
            result = "User with this name already exist";
        }
    } else {
        await User.deleteMany({});
        result = "All users were deleted";
    } 
    res.send(result);
}

module.exports = {
    getUsers,
    createUsers,
    putUser,
    deleteUsers,
}