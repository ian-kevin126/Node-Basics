let http = require("http");

// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
/*
request对象其实是http.IncomingMessage 类的实例
response对象其实是http.ServerResponse 类的实例
* */
server.on("request", function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    // console.log(req.url);
    if(req.url.startsWith("/index")){
        // 注意点: 如果通过end方法来返回数据, 那么只会返回一次
        // res.end("首页1");
        // res.end("首页2");
        // 注意点: 如果通过write方法来返回数据, 那么可以返回多次
        //         write方法不具备结束本次请求的功能, 所以还需要手动的调用end方法来结束本次请求
        res.write("首页1");
        res.write("首页2");
        res.end();
    }else if(req.url.startsWith("/login")){
        res.end("登录");
    }else{
        res.end("没有数据");
    }
});
// 3.指定监听的端口
server.listen(3000);