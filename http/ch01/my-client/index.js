const http = require("http");
const options = new URL("http://localhost:3000");

const handler = (response) => {
  const data = []

  response.on("data", (chunk) => {
    data.push(chunk.toString());
  });

  response.on("end", () => {
    console.log(data.join(""));
  });
}

const request = http.request(options, handler);
request.end();