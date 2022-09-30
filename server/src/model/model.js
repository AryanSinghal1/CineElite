const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    date1:{
        type: String
    },
    time1:{
        type: String
    },
    date2:{
        type: String
    },
    time2:{
        type: String
    }
})
const userModel = new mongoose.model("user", userSchema)
module.exports = userModel