require('dotenv').config();
require('./models/db')
const express = require('express')
const app = express()
const User = require('./models/user')
app.post('/create-user', async (req, res, next) => {
    const user = await User({ fullname: "Taimoor", email: "Taimoorali083@gmailc.om", password: "22234523" })
    await user.save()
    res.json(user)
})

app.get('/', (req, res, next) => {
    res.send("hi Taimoor Welcome home")
})

app.listen(8000, () => {
    console.log("Port is listening")
})