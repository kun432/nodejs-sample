var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request',doRequest);
server.listen(process.env.PORT || 1234, process.env.IP);
console.log('Server Running!')

function doRequest(req,res){
  fs.readFile('./hello.html', 'UTF-8',
    function(err,data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
}
