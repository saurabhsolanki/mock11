const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb+srv://mock:mock@cluster0.bvmggaj.mongodb.net/mock?retryWrites=true&w=majority");
};

module.exports = connect;
