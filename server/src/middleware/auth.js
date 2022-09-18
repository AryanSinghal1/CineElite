const jwt = require('jsonwebtoken');
const userRegisterModel = require('../model/registeredModel');
const auth = async(req, res, next)=>{
    try{
        const token = req.cookies.jwt;
        const Verifyuser = jwt.verify(token, "Helloeveryonewelcometothecinelite");
        const data = userRegisterModel.findOne({_id:Verifyuser._id})
        console.log(data)
        next();
    }catch(error){
        res.send(error)
    }
}
module.exports = auth;