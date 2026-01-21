const http = require("http");

const url = process.argv[2];

if(!url) {
  console.error("Usage: node my-client <url>");
  process.exit(1);
}

const options = new URL(url);

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