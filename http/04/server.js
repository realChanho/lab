const http = require("http");

const handler = (req, res) => {
  const cookies = req.headers.cookie;

  if (cookies && cookies.includes("sid")) {
    res.write("Welcome back\n");
    res.end();
    return;
  }

  res.setHeader("Set-Cookie", "sid=1; Secure;");
  res.write("Welcome\n");
  res.end();
};

const server = http.createServer(handler);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
