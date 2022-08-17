const http = require('http');

const server = http.createServer((req, res) => {
    //console.log('request made');
    console.log(req.url, req.method);

    // set header
    /* res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Granger'); */
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Hello Granger</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
});