const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    _id1 : Number,
    firstName : String,
    lastName : String,
    contact : String,
    image : String,
    address : String,
    password : String,
    email : String,
    gender: String,
    dob : String
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;