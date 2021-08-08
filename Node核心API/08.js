let fs = require("fs");
let path = require("path");

// 1.拼接写入的路径
let str = path.join(__dirname, "lnj.txt");

// 2.开始追加数据
fs.appendFile(str, "知播渔", "utf8", function (err) {
    if(err){
        throw new Error("追加数据失败");
    }else{
        console.log("追加数据成功");
    }
});
