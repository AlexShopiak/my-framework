const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
});

const user = mongoose.model('User', userSchema);

module.exports = user;