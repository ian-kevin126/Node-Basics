/*
Promise.resolve().then(function () {
    console.log("Promise");
});
process.nextTick(function () {
    console.log("process.nextTick1");
});
process.nextTick(function () {
    console.log("process.nextTick2");
});
process.nextTick(function () {
    console.log("process.nextTick3");
});
 */
/*
setTimeout(function () {
    console.log("setTimeout");
});
Promise.resolve().then(function () {
    console.log("Promise");
});
console.log("同步代码 Start");
process.nextTick(function () {
    console.log("process.nextTick");
});
setImmediate(function () {
    console.log("setImmediate");
});
console.log("同步代码 End");
 */
/*
setTimeout(function () {
    console.log("setTimeout1");
    // p1
    Promise.resolve().then(function () {
        console.log("Promise1");
    });
    // n1
    process.nextTick(function () {
        console.log("process.nextTick1");
    });
});
console.log("同步代码 Start");
setTimeout(function () {
    console.log("setTimeout2");
    // p2
    Promise.resolve().then(function () {
        console.log("Promise2");
    });
    // n2
    process.nextTick(function () {
        console.log("process.nextTick2");
    });
});
console.log("同步代码 End");
 */

/*
注意点: 如下代码输出的结果是随机的
        在NodeJS中指定的延迟时间是有一定的误差的, 所以导致了输出结果随机的问题
* */
/*
setTimeout(function () {
    console.log("setTimeout");
}, 0);
setImmediate(function () {
    console.log("setImmediate");
});
 */

const path = require("path");
const fs = require("fs");

fs.readFile(path.join(__dirname, "04.js"), function () {
    setTimeout(function () {
        console.log("setTimeout");
    }, 0);
    setImmediate(function () {
        console.log("setImmediate");
    });
});
