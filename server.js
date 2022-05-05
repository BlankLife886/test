var express = require('express');
var app = express();
const hostname = 'localhost';
const port = 8888;
app.use(express.static('./'));
app.listen(port, hostname, () => {
    console.log("·Server running at http://${hostname}:${port}·");
});