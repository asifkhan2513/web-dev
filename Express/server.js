const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("you server started at port no , 3000");
});
app.get("/", (re1, res) => {
  res.send("working fine ");
});
