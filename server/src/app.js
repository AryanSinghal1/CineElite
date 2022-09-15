const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const path = require("path");
const bcrypt = require("bcryptjs");
require("./connection/connection");
const nodemailer = require("nodemailer");
const registerSchema = require("./model/registeredModel");
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true , limit:"500mb"}));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.get("/admInvite", async (req, res) => {
  res.send("This is invite");
});
app.post("/admInvite", async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aryann11223@gmail.com",
      pass: "wbbjbzxprjzozeqc",
    },
  });
  let info = await transporter.sendMail({
    from: "aryann11223@gmail.com",
    to: req.body.username,
    subject: "Welcome to CineElite",
    text: `Hello ${req.body.username}, your invite code is ${req.body.invitecode}`,
    html: `<p>Hello User, Your username is ${req.body.username} and your invite code is ${req.body.invitecode}</p>`,
  });
  console.log("Message sent: %s", info.messageId);
  const newUser = new registerSchema({
    fname: "To be entered by the user",
    lname: "To be entered by the user",
    email: req.body.username,
    password: req.body.invitecode,
    mobile: "To be entered by the user",
    address: "To be entered by the user",
    vatTaxNumber: "To be entered by the user",
    introduction: "To be entered by the user",
    opAddress: "To be entered by the user",
    YearsExp: "To be entered by the user",
    registered: false,
  });
  await newUser.save().then(()=>{res.send("0")}).catch(e=>res.send("1"));
});
let variable = 0
app.post("/register", async (req, res) => {
  const userFound = await registerSchema.findOne({ email: req.body.email });
  console.log(req.body)
  if (userFound) {
    if (userFound.password == req.body.invite) {
      userFound.fname = req.body.fname;
      userFound.lname = req.body.lname;
      userFound.email = req.body.email;
      userFound.mobile = req.body.mobile;
      userFound.address = req.body.address;
      userFound.vatTaxNumber = req.body.VAT;
      userFound.introduction = req.body.intro;
      userFound.profImage = req.body.profile;
      userFound.vatDocument = req.body.vatDoc;
      await userFound.save().then((e)=>{res.send("0");variable=1;}).catch((e)=>console.log(e));
    } else {
      res.send("1");
      console.log("Invalid Invite Code.");
      variable = 2;
    }
  } else {
    res.send("2");
    console.log("User not Referred.");
    variable = 3;
  }
});
app.get("/admlogin", async (req, res) => {
  const getData = await registerSchema.find();
  res.send(getData);
});
app.get("/verify", async (req, res) => {
  const getVerifyData = await registerSchema.find();
  res.send(getVerifyData);
});
app.post("/pass", async (req, res) => {
  const signupUser = await registerSchema.findOne({ email: req.body.email });
  console.log(signupUser);
  if (signupUser && signupUser.registered) {
    signupUser.password = req.body.password;
    await signupUser.save();
  } else {
    console.log("User not Verified Yet");
  }
});
app.post("/admverify", async (req, res) => {
  const getUserData = await registerSchema.findOne({ email: req.body.email });
  if (getUserData) {
    if (!getUserData.registered) {
      const random = Math.floor(Math.random() * 899999) + 100000;
      getUserData.registered = true;
      getUserData.password = random;
      await getUserData.save();
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "aryann11223@gmail.com",
          pass: "wbbjbzxprjzozeqc",
        },
      });
      let info = await transporter.sendMail({
        from: "aryann11223@gmail.com",
        to: req.body.email,
        subject: "Welcome to Stabnil6",
        text: `Hello ${req.body.email}, you are verified`,
        html: `<p>Hello User, You are verified and You can now go and setup your account with ${random} </p>`,
      });
      console.log("Message sent: %s", info.messageId);
    } else {
      console.log("User already registered");
    }
  } else {
    console.log("No user found");
  }
});
app.post("/userlogin", async (req, res) => {
  const loginUser = await registerSchema.findOne({ email: req.body.email });
  console.log(req.body.email);
  console.log(loginUser);
  if (loginUser) {
    const loginDone = await bcrypt.compare(
      req.body.password,
      loginUser.password
    );
    if (loginDone) {
      res.send("0");
      console.log("Sivvess");
    } else {
      res.send("1");
    }
  } else {
    res.send("2")
  }
});
app.listen(port, () => {
  console.log(`Listening to the server ${port}`);
});
