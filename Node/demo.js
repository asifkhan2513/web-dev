const express = require("express");
let app = express();
let port = 3000;
app.listen(`${port}`, () => {
  console.log(`server is running on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("Hello i am from backend side  and response is sended by Asif  ");
});
