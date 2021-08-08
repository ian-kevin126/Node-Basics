// let buf = Buffer.alloc(5);
// console.log(buf); // <Buffer 00 00 00 00 00>
// 注意点: 通过console.log();输出Buffer. 会自动将存储的内容转换成16进制再输出

// let buf = Buffer.alloc(5, 17);
// console.log(buf);

// let buf = Buffer.from("abc");
// console.log(buf); // <Buffer 61 62 63>

let buf = Buffer.from([1, 3, 5]);
console.log(buf);
// console.dir(buf);
buf[0] = 6;
console.log(buf);