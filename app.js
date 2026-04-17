const http = require('http');

function add(a, b) {
    return a + b;
}

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/add')) {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const a = parseInt(url.searchParams.get('a'));
        const b = parseInt(url.searchParams.get('b'));

        const result = add(a, b);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ result }));
    } else {
        res.writeHead(200);
        res.end("Addition Service Running");
    }
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = add;
