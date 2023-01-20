const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
mongoose.set("strictQuery", true);
const app = express()
const signupRoute = require('./routes/signup.routes')
const loginRoute = require('./routes/login.route')

require("dotenv").config();
const PORT = process.env.PORT || 9000;
const URL = process.env.URL || "";


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors()) 

app.get('/', (req, res) => res.send('hello'))
app.use("/signup",signupRoute)
app.use("/login",loginRoute)


app.listen(PORT, async() => {
  await mongoose.connect(URL)
  console.log(`server started on port ${PORT}`)
})