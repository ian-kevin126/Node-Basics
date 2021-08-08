let fs = require("fs");
let path = require("path");

let str = path.join(__dirname, "abc");
/*
fs.mkdir(str, function (err) {
    if(err){
        throw new Error("创建目录失败");
    }else{
        console.log("创建目录成功");
    }
});
 */
/*
fs.rmdir(str, function (err) {
    if(err){
        throw new Error("删除目录失败");
    }else{
        console.log("删除目录成功");
    }
});
 */
fs.readdir(__dirname, function (err, files) {
    if(err){
        throw new Error("读取目录失败");
    }else{
        // console.log(files);
        files.forEach(function (obj) {
            // console.log(obj);
            let filePath = path.join(__dirname, obj);
            // console.log(filePath);
            let stats = fs.statSync(filePath);
            if(stats.isFile()){
                console.log("是一个文件", obj);
            }else if(stats.isDirectory()){
                console.log("是一个目录", obj);
            }
        });
    }
})