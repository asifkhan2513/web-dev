const express = require("express");
const app = express();
// loading configure file
require("dotenv");
const PORT = process.env.PORT || 4000;
// middleware  to parse json request body
app.use(express.json());

// import route for TODO
const todoRoutes = require("./routes/todos");
app.use("/api/v1", todoRoutes);
// server start
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
// database connection
const dbConnecte = require("./config/database");
dbConnecte();
// default routes
app.get("/", (res, res) => {
  res.send("<h1>Home Page Body  </h1>");
});
