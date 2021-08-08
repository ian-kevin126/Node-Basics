let fs = require("fs");
let path = require("path");

// 1.拿到需要读取的文件路径
let str = path.join(__dirname, "data.txt");
console.log(str);
// 2.读取文件
/*
fs.readFile(str,"utf8", function (err, data) {
    if(err){
        throw new Error("读取文件失败");
    }
    console.log(data);
    // console.log(data.toString());
});
 */
let data = fs.readFileSync(str, "utf8");
console.log(data);