const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/stabniluser", {
// mongoose.connect("mongodb+srv://dbUser:dbUserPassword@cluster0.g8vz6t9.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{console.log("Connection Successful")}).catch((e)=>console.log(e))
