const fs = require("fs");
const http = require("http");
const url = require("url");

const replaceTemplate = require("./starter/modules/replaceTemplate.js");
/////////////////////////////////////////////
// FILES

// Blocking, sync way
// const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know abt the avocado: ${textIn}. \n Created on ${Date.now()}`;

// fs.writeFileSync("./starter/txt/output.txt", textOut);

// console.log("File Written");

// Non-blocking, sync way
// fs.readFile("./starter/txt/start.txt", "utf-8", (err, data1) => {
//   if (err) console.log(`Error: ${err}`);

//   fs.readFile(`./starter/txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./starter/txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         "./starter/txt/final.txt",
//         `${data2} \n ${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("File has been written");
//         }
//       );
//     });
//   });
// });
// console.log("Will Read file!");

/////////////////////////////////////////////
// SERVER
const templateOverview = fs.readFileSync(
  "./starter/templates/template-overview.html",
  "utf-8"
);
const templateCard = fs.readFileSync(
  "./starter/templates/template-card.html",
  "utf-8"
);
const templateProduct = fs.readFileSync(
  "./starter/templates/template-product.html",
  "utf-8"
);
const data = fs.readFileSync("./starter/dev-data/data.json", "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Overview page
  if (pathname === "/overview" || pathname === "/") {
    res.writeHead(200, {
      "Content-type": "text/HTML",
    });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(templateCard, el))
      .join("");
    const output = templateOverview.replace("{%ProductCards%}", cardsHtml);

    res.end(output);

    // Product page
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text/HTML",
    });
    const product = dataObj[query.id];
    const output = replaceTemplate(templateProduct, product);
    res.end(output);

    // API
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "Content-type": "application/JSON",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1> nothing here </h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
