let http = require("http");
let path = require("path");
let fs = require("fs");
let url = require("url");
let queryString = require("querystring");
let template = require("art-template");

let persons = {
    "lisi": {
        name: "lisi",
        gender: "male",
        age: "33"
    },
    "zhangsan": {
        name: "zhangsan",
        gender: "female",
        age: "18"
    }
};

// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
server.on("request", function (req, res) {
   if(req.url.startsWith("/index") && req.method.toLowerCase() === "get"){
       let obj = url.parse(req.url);
       let filePath = path.join(__dirname, obj.pathname);
       fs.readFile(filePath, "utf8", function (err, content) {
           if(err){
               res.writeHead(404, {
                   "Content-Type": "text/plain; charset=utf-8"
               });
               res.end("Page Not Found");
           }
           res.writeHead(200, {
               "Content-Type": "text/html; charset=utf-8"
           });
           res.end(content);
       });
   }
   else if(req.url.startsWith("/info") && req.method.toLowerCase() === "post"){
       let params = "";
       req.on("data", function (chunk) {
           params += chunk;
       });
       req.on("end", function () {
           let obj = queryString.parse(params);
           let per = persons[obj.userName];
           // console.log(per);
           let filePath = path.join(__dirname, req.url);
           /*
           fs.readFile(filePath, "utf8", function (err, content) {
               if(err){
                   res.writeHead(404, {
                       "Content-Type": "text/plain; charset=utf-8"
                   });
                   res.end("Page Not Found");
               }
               content = content.replace("!!!name!!!", per.name);
               content = content.replace("!!!gender!!!", per.gender);
               content = content.replace("!!!age!!!", per.age);
               res.end(content);
           });
            */
           let html = template(filePath, per);
           res.writeHead(200, {
               "Content-Type": "text/html; charset=utf-8"
           });
           res.end(html);
       });
   }
});
// 3.指定监听的端口
server.listen(3000);