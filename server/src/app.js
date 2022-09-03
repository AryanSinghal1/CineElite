const express = require('express')
const app = express()
const port = process.env.PORT||8000;
require('./connection/connection')
const personSchema = require('./model/model')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res)=>{
    res.send("Hello")
})
app.post('/', async(req, res)=>{
    const newUser = new personSchema({
        name: req.body.username,
        password: req.body.invitecode,
        registered: false
    })
        await newUser.save()
})

app.listen(port, ()=>{
    console.log(`Listening to the server ${port}`)
})