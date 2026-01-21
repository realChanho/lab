const http = require("http");
const path = require("path");
const fs = require("fs");

const static = (request, response) => {
  const filepath = path.join(__dirname, "public", request.url);

  fs.readFile(filepath, (err, data) => {
    if (err) {
      response.write("Not Found");
      response.end();
      return
    }

    response.write(data);
    response.end();
  })
}

const handler = (request, response) => static(request, response);

const server = http.createServer(handler)
server.listen(3000, () => {
  console.log("Server is listening on port 3000")
})