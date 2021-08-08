let http = require("http");
let queryString = require("querystring");

// 1.创建一个服务器实例对象
let server = http.createServer();
server.on("request", function (req, res) {
    // 1.定义变量保存传递过来的参数
    let params = "";
    // 注意点: 在NODEJS中 ,POST请求的参数我们不能一次性拿到, 必须分批获取
    req.on("data", function (chunk) {
        // 每次只能拿到一部分数据
        params += chunk;
    });
    req.on("end", function () {
        // 这里才能拿到完整的数据
        // console.log(params);
        let obj = queryString.parse(params);
        // console.log(obj.userName);
        // console.log(obj.password);
        res.end(obj.userName + "----" + obj.password);
    });
});
// 3.指定监听的端口
server.listen(3000);