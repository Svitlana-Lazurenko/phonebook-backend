const mongoose = require("mongoose");
const { DB_HOST } = process.env;

const connectDB = async () => {
  console.log(DB_HOST);
  await mongoose.connect(DB_HOST);
};

module.exports = connectDB;
