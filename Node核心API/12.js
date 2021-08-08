let http = require("http");

/*
// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
server.on("request", function (req, res) {
    // end方法的作用: 结束本次请求并且返回数据
    // res.end("www.it666.com");
    // writeHead方法的作用: 告诉浏览器返回的数据是什么类型的, 返回的数据需要用什么字符集来解析
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    res.end("知播渔");
});
// 3.指定监听的端口
server.listen(3000);
 */
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    res.end("知播渔666");
}).listen(3000);