const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User =  new Schema({
    _id: {type: String, required: true},
    name: {type: String},
    username: {type: String},
    password: {type: String},
    token: {type: String},
    level: {type: Number},
})
module.exports = mongoose.model('Users', User)
