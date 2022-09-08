const express = require('express')
const app = express()
const port = process.env.PORT||8000;
const cors = require('cors')
const path = require('path')
const bcrypt = require('bcryptjs')
require('./connection/connection')
const multer = require('multer')
const nodemailer = require('nodemailer')
const personSchema = require('./model/model')
const signupSchema = require('./model/signupmodel')
const registerSchema = require('./model/registeredModel')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
var Storage = multer.diskStorage({
  destination:function(req, file, cb){
    cb(null, '/public/uploads')
  },
  filename: function(req, file, cb){
    cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname))
  }
})
var upload = multer({
  storage:Storage
});
var multipleUploads = upload.fields([{name:'vatPhoto'}, {name:'proPhoto'}])
app.get('/', (req, res)=>{
    res.send("Hello")
})
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.get('/admInvite', async(req, res)=>{
  res.send("This is invite")
})
app.post('/admInvite', async(req, res)=>{
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: "aryann11223@gmail.com",
          pass: "wbbjbzxprjzozeqc", 
        },
      });
      let info = await transporter.sendMail({
        from: 'aryann11223@gmail.com', 
        to: req.body.username, 
        subject: "Welcome to Stabnil6", 
        text: `Hello ${req.body.username}, your invite code is ${req.body.invitecode}`, 
        html: `<p>Hello User, Your username is ${req.body.username} and your invite code is ${req.body.invitecode}</p>`, 
      });    
      console.log("Message sent: %s", info.messageId);
    const newUser = new personSchema({
        name: req.body.username,
        password: req.body.invitecode,
        registered: false
    })
        await newUser.save()
})
app.post('/register', multipleUploads, async(req, res)=>{
  // upload(reqImg, resImg, async(err)=>{
  //   if(err){
  //     console.log(err);
  //   }else{
    console.log(req.body)
      const signupUser = new signupSchema({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address,
        vatTaxNumber: req.body.VAT,
        introduction: req.body.intro,
        registered: false,
        // vatImage: req.body.vatPhoto,
        // profImage: req.body.proPhoto
      })
    const userFound = await personSchema.findOne({name:req.body.email})
    if(userFound){
      console.log(userFound)
      if(userFound.password==req.body.invite){
        await signupUser.save()
      }else{
        console.log("Invalid Credentials 1")
      }
    }else{
      console.log("Invalid Credentials 2")
    }
    // }
  // })
})
app.get('/admlogin', async(req, res)=>{
  const getData = await signupSchema.find()
  res.send(getData)
})
app.get('/verify', async(req, res)=>{
  const getVerifyData = await personSchema.find()
  res.send(getVerifyData)
})
app.post('/pass', async(req, res)=>{
  const signupUser = await signupSchema.findOne({email: req.body.email})
  console.log(signupUser)
  if(signupUser){
  const getRegisteredUser = new registerSchema({
    name: signupUser.fname,
    email: signupUser.email,
    mobile: signupUser.mobile,
    address: signupUser.address,
    vatTaxNumber: signupUser.vatTaxNumber,
    introduction: signupUser.introduction,
    password: req.body.password,
    opAddress: "this",
    YearsExp:"1",
    registered: false
  })
  await getRegisteredUser.save()
}else{
  console.log("User not found")
}
})
app.post('/admverify', async(req, res)=>{
  const getUserData = await signupSchema.findOne({email:req.body.email})
  const getLoginUserData = await personSchema.findOne({name:req.body.email})
  if(getUserData){
    if(!getUserData.registered){
      const random = Math.floor(Math.random() * 899999) + 100000;
    getUserData.registered = true
    getLoginUserData.password = random
    getLoginUserData.registered = true
    await getUserData.save()
    await getLoginUserData.save()
    let transporter = nodemailer.createTransport({
      service:'gmail',
      auth: {
        user: "aryann11223@gmail.com",
        pass: "wbbjbzxprjzozeqc", 
      },
    });
    let info = await transporter.sendMail({
      from: 'aryann11223@gmail.com', 
      to: req.body.email, 
      subject: "Welcome to Stabnil6", 
      text: `Hello ${req.body.email}, you are verified`, 
      html: `<p>Hello User, You are verified and You can now go and setup your account with ${random} </p>`, 
    });
    console.log("Message sent: %s", info.messageId);}else{
      console.log("User already registered")
    }    
  }else{
    console.log("No user found")
  }
})
app.post('/userlogin', async(req, res)=>{
  const loginUser = await registerSchema.findOne({email: req.body.email})
  console.log(req.body.email)
  console.log(loginUser)
  if(loginUser){
    const loginDone = await bcrypt.compare(req.body.password, loginUser.password)
    if(loginDone){
      res.send("Success")
      console.log("Sivvess")
    }else{
      res.send("Invalid Credentials")
    }
  }else{
    console.log("User not found")
  }
})
app.listen(port, ()=>{
    console.log(`Listening to the server ${port}`)
})