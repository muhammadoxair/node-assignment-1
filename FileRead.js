const http = require("http");
const fs = require('fs');

const HOST = 'localhost';
const PORT = 5000;

const requestListener = function (req, res) {
    fs.readFile('./file.txt', 'utf8', (error, data) => {
        if(error){
           console.log(`ERROR: ${error}`);
           return;
        }
        res.writeHead(200);
        res.end(data);
    })
};

const server = http.createServer(requestListener);
server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
