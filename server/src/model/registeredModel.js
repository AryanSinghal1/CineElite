const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const registerUserSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    registered:{
        type: Boolean,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
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
    opAddress:{
        type: String,
        required: true
    },
    YearsExp:{
        type: String,
        required: true
    },
})
let i=0;
registerUserSchema.pre("save", async function(){
    if(this.isModified('password')&&this.registered&&i>0){
    this.password = await bcrypt.hash(this.password, 10);
}
i++;
})

const userRegisterModel = new mongoose.model("userRegister", registerUserSchema)
module.exports = userRegisterModel