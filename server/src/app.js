const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const route = require('./routes/userRoute');
const chatRoute = require('./routes/chatRoute');
const customerRoute = require('./routes/customerRoute');
const supplierRoute = require('./routes/supplierRoutes');
const cookieParser = require('cookie-parser');
const Chat = require("./model/chatModel");
require("./connection/connection");
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true , limit:"500mb"}));
app.use(cors());
app.use(cookieParser());
app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})
app.use("/api", route);
app.use("/chat", chatRoute);
app.use("/customers", customerRoute);
app.use("/suppliers", supplierRoute);
io.on("connection", socket=>{
  socket.on("Input Chat Message", msg => {
    try{
      console.log(msg);
    let chat = new Chat({
      message: msg.value, 
      sender: msg.userId,
      type: msg.type,
      email: msg.userName,
      time: msg.time,
      to: msg.to
    })
    console.log("Chat"+chat);
    chat.save(async(err, doc)=>{
      if(err){
        return res.json({
          succes: false,
         err
        })
      }
      console.log(doc._id);
      Chat.find({_id:doc._id}).populate("sender").populate("to").exec((err, doc)=>{
        return io.emit("Output Chat Message", doc);
      })
    })
  }catch(err){
    console.log(err);
  }})
})
server.listen(port, () => {
  console.log(`Listening to the server ${port}`);
});


