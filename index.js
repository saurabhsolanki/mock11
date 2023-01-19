const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
mongoose.set("strictQuery", true);
const app = express()
const signupRoute = require('./routes/signup.routes')
const loginRoute = require('./routes/login.route')



app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors()) 
app.use("/signup",signupRoute)
app.use("/login",loginRoute)


app.get('/', (req, res) => res.send('hello'))

app.listen(8000, async() => {
  await mongoose.connect("mongodb+srv://mock:mock@cluster0.bvmggaj.mongodb.net/mock?retryWrites=true&w=majority")
  console.log(`server started on port ${8000}`)
})