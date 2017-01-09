var http = require('http');

var server = http.createServer();
server.on('request',doRequest);
server.listen(process.env.PORT || 1234, process.env.IP);
console.log('Server Running!')

function doRequest(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World\n');
  res.end();
}
