const http = require("http");

const content = `HTTP Lecture
1. Basic
  1.1 HTTP Start
  1.2 HTTP Message
2. Web Browser
  2.1 Content Negotiation
  2.2 Cookie
`

const handler = (request, response) => {
  response.write(content)
  response.end()
}

const server = http.createServer(handler)
server.listen(3000, () => {
  console.log("Server is listening on port 3000")
})