const connect = require('connect');
const app = connect();

app.use('/json', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({message: 'Hello from NodeJS Application as json'}));
});

app.use('/html', function (req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hello from NodeJS Application as html</h1>');
});

app.use('/', function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application'); 
});

app.listen(3000);

console.log('Server running at http://localhost:3000/');