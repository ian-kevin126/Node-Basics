let http = require("http");
let path = require("path");
let fs = require("fs");

// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
server.on("request", function (req, res) {
    /*
    if(req.url.startsWith("/index")){
        // let filePath = path.join(__dirname, "www", "index.html");
        // let filePath = path.join(__dirname, "www", req.url);
        // fs.readFile(filePath, "utf8", function (err, content) {
        //     if(err){
        //         res.end("Server Error");
        //     }
        //     res.end(content);
        // });
        readFile(req, res);
    }else if(req.url.startsWith("/login")){
        // let filePath = path.join(__dirname, "www", req.url);
        // fs.readFile(filePath, "utf8", function (err, content) {
        //     if(err){
        //         res.end("Server Error");
        //     }
        //     res.end(content);
        // });
        readFile(req, res);
    }else{
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        res.end("没有数据");
    }
    */
    readFile(req, res);
});
// 3.指定监听的端口
server.listen(3000);

function readFile(req, res) {
    let filePath = path.join(__dirname, "www", req.url);
    fs.readFile(filePath, "utf8", function (err, content) {
        if(err){
            res.end("Server Error");
        }
        res.end(content);
    });
}