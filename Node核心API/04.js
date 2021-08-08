let path = require("path");

/*
// basename用于获取路径的最后一个组成部分
// let res = path.basename('/a/b/c/d/index.html');
// let res = path.basename('/a/b/c/d');
// let res = path.basename('/a/b/c/d/index.html', ".html");
// console.log(res);

// dirname用于获取路径中的目录, 也就是除了最后一个部分以外的内容
// let res = path.dirname('/a/b/c/d/index.html');
// let res = path.dirname('/a/b/c/d');
// console.log(res);

// extname用于获取路径中最后一个组成部分的扩展名
// let res = path.extname('/a/b/c/d/index.html');
// let res = path.extname('/a/b/c/d');
// console.log(res);
*/
/*
isAbsolute用于判断路径是否是一个绝对路径
注意点:
区分操作系统
在Linux操作系统中/开头就是绝对路径
在Windows操作系统中盘符开头就是绝对路径

在Linux操作系统中路径的分隔符是左斜杠 /
在Windows操作系统中路径的分隔符是右斜杠 \
* */
/*
// let res = path.isAbsolute('/a/b/c/d/index.html'); // true
// let res = path.isAbsolute('./a/b/c/d/index.html'); // false
// let res = path.isAbsolute('c:\\a\\b\\c\\d\\index.html'); // true
// let res = path.isAbsolute('a\\b\\c\\d\\index.html'); // false
// console.log(res);

// path.sep用于获取当前操作系统中路径的分隔符的
// 如果是在Linux操作系统中运行那么获取到的是 左斜杠 /
// 如果是在Windows操作系统中运行那么获取到的是 右斜杠 \
// console.log(path.sep);

// path.delimiter用于获取当前操作系统环境变量的分隔符的
// 如果是在Linux操作系统中运行那么获取到的是 :
// 如果是在Windows操作系统中运行那么获取到的是 ;
// console.log(path.delimiter);
*/

/*
path.parse(path): 用于将路径转换成对象
{
  root: '/',
  dir: '/a/b/c/d',
  base: 'index.html',
  ext: '.html',
  name: 'index'
}
path.format(pathObject): 用于将对象转换成路径
* */
/*
// let obj = path.parse("/a/b/c/d/index.html");
// console.log(obj);

let obj = {
    root: '/',
    dir: '/a/b/c/d',
    base: 'index.html',
    ext: '.html',
    name: 'index'
};
let str = path.format(obj);
console.log(str);
 */

/*
path.join([...paths]): 用于拼接路径
注意点:
如果参数中没有添加/, 那么该方法会自动添加
如果参数中有.., 那么会自动根据前面的参数生成的路径, 去到上一级路径
* */
/*
// let str = path.join("/a/b", "c"); // /a/b/c
// let str = path.join("/a/b", "/c"); // /a/b/c
// let str = path.join("/a/b", "/c", "../"); // /a/b/c --> /a/b
// let str = path.join("/a/b", "/c", "../../"); // /a/b/c --> /a
// console.log(str);
 */

/*
path.normalize(path): 用于规范化路径
* */
/*
let res = path.normalize("/a//b///c////d/////index.html");
console.log(res);
*/

/*
path.relative(from, to): 用于计算相对路径
第一个参数: /data/orandea/test/aaa
第二个参数: /data/orandea/impl/bbb

/data/orandea/test/aaa --> ../  --> /data/orandea/test
/data/orandea/test --> ../ --> /data/orandea
..\..\impl\bbb
* */
/*
let res = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
console.log(res);
 */

/*
path.resolve([...paths]): 用于解析路径
注意点: 如果后面的参数是绝对路径, 那么前面的参数就会被忽略
* */
// let res = path.resolve('/foo/bar', './baz'); // /foo/bar/baz
// let res = path.resolve('/foo/bar', '../baz'); // /foo/baz
let res = path.resolve('/foo/bar', '/baz'); // /baz
console.log(res);
