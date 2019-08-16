var http = require('http')

http.createServer(function(request,response){
    //发送http头部
    //http状态200：ok
    //内容类型：text/plain
    response.writeHead(200,{'Content-Type':'text/plain'})
    //发送响应数据：hello world
    response.end('hello world\n')
}).listen(8888)
console.log('server running at http://172.0.0.1:8888')