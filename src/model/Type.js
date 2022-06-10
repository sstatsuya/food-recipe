const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Type =  new Schema({
    _id: {type: String},
    name: {type: String}
})
module.exports = mongoose.model('Types', Type)
