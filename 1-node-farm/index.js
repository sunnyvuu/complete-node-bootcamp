const fs = require("fs");
const http = require("http");

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
const server = http.createServer((req, res) => {
  res.end("Hello from the server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
