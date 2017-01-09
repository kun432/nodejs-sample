var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

var hello = fs.readFileSync('./hello.ejs', 'utf8');
var server = http.createServer();
server.on('request',doRequest);
server.listen(process.env.PORT || 1234, process.env.IP);
console.log('Server Running!')

function doRequest(req,res){
    var hello2 = ejs.render(hello, {
      title:"タイトルです",
      content:"これはサンプルで作成したテンプレートです",
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(hello2);
    res.end();
}
