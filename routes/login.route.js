const { Router } = require("express");
const signup = require("../models/signup.model");
const jwt = require("jsonwebtoken");

const app = Router();

app.get("/", async (req, res) => {

  try {
    let signupdata = await signup.find();
    res.send({ message: "signups", data: signupdata });
  } catch (e) {
    console.log(e);
  }
});
app.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
      const userdata = await signup.findOne({ email, password });
      if (userdata) {
        const token = jwt.sign(
          { id: userdata._id, name: userdata.email },
          "fullstack123",
          { expiresIn: "1 day" }
        );
        console.log(token)
        return res.send({message:"Login success", token})
      }
      return res.send("invalid creds")
    } catch (e) {
      console.log(e);
    }
  });
  

module.exports=app