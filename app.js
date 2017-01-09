var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request',doRequest);
server.listen(process.env.PORT || 1234, process.env.IP);
console.log('Server Running!')

function doRequest(req,res){
  var number = Math.floor(Math.random()*3);
  fs.readFile('./hello.html', 'UTF-8',
    function(err,data){
      var title = ["ページA", "ページB", "ページC"];
      var content = ["※これはサンプルで作ったものです。",
                     "もう一つのコンテンツです。",
                     "最後に用意したコンテンツですよ"];
      var data2 = data.replace(/@title@/g, title[number]).replace(/@content@/, content[number]);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data2);
      res.end();
    });
}
