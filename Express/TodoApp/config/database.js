const e = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dbConnected = () => {
  mongoose.connect(process.env.DATABASE_URL),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
      .then(() => {
        console.log("DB connected succesfull");
      })
      .catch((err) => {
        console.log(" Db conection issue please fix it ");
        console.error(err.message);
        process.exit(1);
      });
};

module.exports = dbConnected;
