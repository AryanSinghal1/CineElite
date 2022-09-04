const mongoose = require('mongoose')
const signupUserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    vatTaxNumber:{
        type: String,
        required: true
    },
    introduction:{
        type: String,
        required: true
    },
    registered:{
        type: Boolean
    }
})
const userSignupModel = new mongoose.model("userSignup", signupUserSchema)
module.exports = userSignupModel