const { error } = require("console");
const fs = require("fs");
const http = require("http");
const url = require("url");

const ReplaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%IMAGE%}/g, product.image);
};
const tempOverview = fs.readFileSync(
  `./templetes/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(`./templetes/template-card.html`, "utf-8");
const tempProduct = fs.readFileSync(
  `./templetes/template-product.html`,
  "utf-8"
);
const data = fs.readFileSync(`./dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
console.log(dataObj);
const server = http.createServer((req, res) => {
  const pathname = req.url;

  //overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    const cardHtml = dataObj.map((el) => ReplaceTemplate(tempCard, el));
    res.end(tempOverview);
  }
  // product
  else if (pathname === "/product") {
    res.end("This is product page");
  }
  // api
  else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  }

  // page not found
  else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello word",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
