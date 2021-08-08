let http = require("http");
let path = require("path");
// let fs = require("fs");
// let mime = require("./mime.json");
let ss = require("./15-StaticServer.js");

// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
server.on("request", function (req, res) {
    // readFile(req, res);
    // let rootPath = path.join(__dirname, "www");
    let rootPath = "C:\\Users\\Jonathan_Lee\\Desktop\\abc";
    ss.StaticServer(req, res, rootPath);
});
// 3.指定监听的端口
server.listen(3000);
/*
function readFile(req, res) {
    let filePath = path.join(__dirname, "www", req.url);
    // console.log(filePath);
    // 注意点:
    // 1.加载其它的资源不能写utf8
    // 2.如果服务器在响应数据的时候没有指定响应头, 那么在有的浏览器上, 响应的数据有可能无法显示
    let extName = path.extname(filePath);
    let type = mime[extName];
    if(type.startsWith("text")){
        type += "; charset=utf-8;";
    }
    res.writeHead(200, {
        "Content-Type": type
    });
    fs.readFile(filePath, function (err, content) {
        if(err){
            res.end("Server Error");
        }
        res.end(content);
    });
}
 */