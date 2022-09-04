const express = require('express')
const app = express()
const port = process.env.PORT||8000;
const bcrypt = require('bcryptjs')
require('./connection/connection')
const nodemailer = require('nodemailer')
const personSchema = require('./model/model')
const signupSchema = require('./model/signupmodel')
const registerSchema = require('./model/registeredModel')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res)=>{
    res.send("Hello")
})

app.post('/', async(req, res)=>{
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
app.post('/login', async(req, res)=>{
  const signupUser = new signupSchema({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    address: req.body.address,
    vatTaxNumber: req.body.VAT,
    introduction: req.body.intro,
    registered: false
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
})
app.get('/admlogin', async(req, res)=>{
  const getData = await signupSchema.find()
  res.send(getData)
})
app.post('/pass', async(req, res)=>{
  const signupUser = await signupSchema.findOne({email: req.body.email})
  console.log(signupUser)
  if(signupUser){
  const getRegisteredUser = new registerSchema({
    name: signupUser.name,
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
  console.log(getUserData)
  if(getUserData){
    if(!getUserData.registered){
    getUserData.registered = true
    await getUserData.save()
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
      html: `<p>Hello User, You are verified and You can now go and setup your account  </p>`, 
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
      console.log("Success")
    }else{
      console.log("Invalid Credentials")
    }
  }else{
    console.log("User not found")
  }
})
app.listen(port, ()=>{
    console.log(`Listening to the server ${port}`)
})