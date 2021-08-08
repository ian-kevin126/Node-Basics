let path = require("path");
let fs = require("fs");
let vm = require("vm");

class NJModule {
    constructor(id){
        this.id = id; // 保存当前模块的绝对路径
        this.exports = {};
    }
}
NJModule._cache = {};
NJModule._extensions = {
    ".js": function (module) {
        // 1.读取JS代码
        let script = fs.readFileSync(module.id);
        // 2.将JS代码包裹到函数中
        /*
        (function (exports, require, module, __filename, __dirname) {
            exports.name = "lnj";
        });
        * */
        let strScript = NJModule.wrapper[0] + script + NJModule.wrapper[1];
        // 3.将字符串转换成JS代码
        let jsScript = vm.runInThisContext(strScript);
        // 4.执行转换之后的JS代码
        // var args = [this.exports, require, module, filename, dirname];
        // var result = compiledWrapper.call(this.exports, args);
        jsScript.call(module.exports, module.exports);
    },
    ".json": function (module) {
        let json = fs.readFileSync(module.id);
        let obj = JSON.parse(json);
        module.exports = obj;
    }
};
NJModule.wrapper = [
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});'
];

function njRequire(filePath) {
    // 1.将传入的相对路径转换成绝对路径
    let absPath = path.join(__dirname, filePath);
    // 2.尝试从缓存中获取当前的模块
    let cachedModule = NJModule._cache[absPath];
    if (cachedModule) {
        return cachedModule.exports;
    }
    // 3.如果没有缓存就自己创建一个NJModule对象, 并缓存起来
    let module = new NJModule(absPath);
    NJModule._cache[absPath] = module;
    // 4.利用tryModuleLoad方法加载模块
    tryModuleLoad(module);
    // 5.返回模块的exports
    return module.exports
}
function tryModuleLoad(module){
    // 1.取出模块后缀
    let extName = path.extname(module.id);
    NJModule._extensions[extName](module);
}

// let aModule = njRequire("./person.json");
let aModule = njRequire("./02-a.js");
console.log(aModule);
