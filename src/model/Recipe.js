const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Recipe =  new Schema({
    id: {type: String},
    name: {type: String},
})
module.exports = mongoose.model('recipes', Recipe)
