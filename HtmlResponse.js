const http = require("http");

const HOST = 'localhost';
const PORT = 5000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end("<html><body><h1>This is assignment one of nodejs training</h1></body></html>");
};

const server = http.createServer(requestListener);
server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
