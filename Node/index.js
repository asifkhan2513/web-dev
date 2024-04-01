const fs = require("fs");
const http = require("http");
// const { clearLine } = require("readline");
// //Blocking -->  way
// const textIN = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIN);
// const textOut = `This is what we know aboiut the avocano on ${textIN}.\n Created on ${Date.now()}`;
// fs.writeFileSync("./txt/Output.txt", textOut);
// console.log("file is written");
// //Non Blocking Asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) return console.log("Error 🥹");
// });
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your File Has been Written");
//       });
//     });
//   });
// });
// console.log("will read file!");
//Server initiated
const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello from the server");
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening to request on port 3000");
});
