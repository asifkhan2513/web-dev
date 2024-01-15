//server Initiate
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// activate the server on port 3000
const port = 3000;
app.listen(port, (req, res) => {
  console.log(`you are connected to  the port  ${port}`);
});
// Routes
app.get("/", (req, res) => {
  res.send("<h1>I am Responce</h1>");
});
app.get("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  console.log();
  res.send("car details is submitted");
});
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/muDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection succesfull");
  })
  .catch((err) => {
    console.log("Ricieve an error");
  });
