const mongoose = require('mongoose');
mongoose.connect(
   "mongodb://localhost:27017/stabniluser"
    //  "mongodb+srv://dbUser:Password@cluster0.g8vz6t9.mongodb.net/?retryWrites=true&w=majority"
, {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{console.log("Connection Successful")}).catch((e)=>console.log(e));
