let fs = require("fs");
/*
console.log("1");
fs.stat(__dirname, function (err, stats) {
    // console.log("3");
    // console.log(err);
    // birthtime: 文件的创建时间
    // mtime: 文件中内容发生变化, 文件的修改时间
    // console.log(stats);

    if(stats.isFile()){
        console.log("当前路径对应的是一个文件");
    }else if(stats.isDirectory()){
        console.log("当前路径对应的是一个文件夹");
    }
});
console.log("2");
 */

let stats = fs.statSync(__filename);
console.log(stats);