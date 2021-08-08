let fs = require("fs");
let path = require("path");

// 1.拼接写入的路径
let str = path.join(__dirname, "lnj.txt");

// 2.写入数据
/*
// fs.writeFile(str, "知播渔 www.it666.com", "utf-8", function (err) {
 */
let buf = Buffer.from("www.itzb.com");
fs.writeFile(str, buf, "utf-8", function (err) {
    if(err){
        throw new Error("写入数据失败");
    }else{
        console.log("写入数据成功");
    }
});

// let res = fs.writeFileSync(str, "知播渔 www.it666.com", "utf-8");
// console.log(res);