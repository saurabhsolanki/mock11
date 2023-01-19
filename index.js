const express = require('express')
const cors = require('cors')
const app = express()
const signupRoute = require('./routes/signup.routes')
const loginRoute = require('./routes/login.route')
const connect = require('./config/db')

require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors()) 
app.use("/signup",signupRoute)
app.use("/login",loginRoute)


app.get('/', (req, res) => res.send('hello'))

app.listen(PORT, async () => {
    await connect();
    console.log("mongodb connected at 8080");
    try {
    } catch (e) {
      console.log(e);
    }
  });