const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Recipe =  new Schema({
    _id: {type: String, required: true},
})
module.exports = mongoose.model('recipes', Recipe)
