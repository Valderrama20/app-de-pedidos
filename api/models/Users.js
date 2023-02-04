const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: String,
    gmail: String
})

//crear modelo
const Users = mongoose.model('Users', usersSchema)

module.exports = Users