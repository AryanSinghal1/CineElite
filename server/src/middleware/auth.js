// const jwt = require('jsonwebtoken');
// const userRegisterModel = require('../model/registeredModel');
// exports.auth = async(req, res, next)=>{
//     try{
//         const token = req.cookies.jwtoken;
//         console.log(token);
//         const Verifyuser = jwt.verify(token, "Helloeveryonewelcometothecinelite");
//         console.log(Verifyuser);
//         // await userRegisterModel.findOne({_id:Verifyuser._id});
//         next();
//     }catch(error){
//         res.send(error)
//     }
// }