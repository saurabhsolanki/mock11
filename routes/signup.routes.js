const { Router } = require("express");
const signup = require("../models/signup.model");

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
  try {
    let signupdata = await signup.create(req.body);
    res.send({ message: "signups", data: signupdata });
  } catch (e) {
    console.log(e);
  }
});

module.exports=app