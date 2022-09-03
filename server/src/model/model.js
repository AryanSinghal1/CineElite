const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    registered:{
        type: Boolean
    }
})
const userModel = new mongoose.model("user", userSchema)
module.exports = userModel