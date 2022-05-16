// HTTP Module
const http = require("http");
const { stringify } = require("querystring");

// Setting PORT
const PORT = 3000;

// Creating Server
const server = http.createServer();

// Data
const friends = [
  {
    id: 0,
    name: "Nikola Tesla",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
];

// Handling Request
server.on("request", (req, res) => {
  const items = req.url.split("/");

  if (items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200, { "Content-type": "application/json" });
    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Isaac!</li>");
    res.write("<li>What are your thoughts on astronomy?</li>");
    res.write("</body>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

// Listen Server
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
