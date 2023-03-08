const fs = require("fs");

const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(`<html>
      <head> <title>My first page</title> </head>
     <body> <form action="/message" method="POST"><input type="text" name="message"/> <button type="submit">Submit</button> </form> </body> 
      </html>`);

    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      fs.writeFile("message.txt", parsedBody.split("=")[1], (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");

  res.write(`<html>
      <head> <title>My first page</title> </head>
     <body> <h1>Hello from the other side </h1> </body> 
      </html>`);

  res.end();
};

module.exports = {
    handler : routeHandler,
    someText:"yes"
};