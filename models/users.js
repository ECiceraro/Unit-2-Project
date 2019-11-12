const mongoose = require('mongoose');
const Recipe = require('../models/recipes.js')

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    saved: [Recipe.schema]
})


const User = mongoose.model('User', userSchema)


module.exports = User
