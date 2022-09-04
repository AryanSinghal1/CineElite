const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const registerUserSchema = new mongoose.Schema({
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
    password:{
        type: String,
        required: true
    },
    opAddress:{
        type: String,
        required: true
    },
    YearsExp:{
        type: String,
        required: true
    },
})
registerUserSchema.pre("save", async function(){
    if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 10);
    }
})

const userRegisterModel = new mongoose.model("userRegister", registerUserSchema)
module.exports = userRegisterModel