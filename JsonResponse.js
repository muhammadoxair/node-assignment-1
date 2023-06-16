const http = require("http");

const HOST = 'localhost';
const PORT = 5000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end(`{"message": "This is assignment one of nodejs training"}`);
};

const server = http.createServer(requestListener);
server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
