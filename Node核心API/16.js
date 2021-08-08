let url = require("url");
let http = require("http");

// let str = "http://root:123456@www.it666.com:80/index.html?name=lnj&age=68#banner";
// let obj = url.parse(str, true);
// console.log(obj);
// console.log(obj.query.name);
// console.log(obj.query.age);

// 1.创建一个服务器实例对象
let server = http.createServer();
server.on("request", function (req, res) {
    // console.log(req.url);
    let obj = url.parse(req.url, true);
    res.end(obj.query.name + "----" + obj.query.age);
});
// 3.指定监听的端口
server.listen(3000);