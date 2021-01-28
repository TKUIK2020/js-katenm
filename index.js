var generateImage = require('random-image-creator');

console.log();
let http = require("http");
http.createServer(function(request, response) {
response.writeHead(200, {"Content-Type": "text/html"});
let img=generateImage(280,400)
response.write("<img src="+img+">");
response.end();
}).listen(3000);
