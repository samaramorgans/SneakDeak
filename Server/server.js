const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {
    if (req.url === '/login') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'SneakDeak is hacked wow.' })); 
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});	
server.listen(PORT, () => {
});
