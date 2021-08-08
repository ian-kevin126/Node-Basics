// let res = Buffer.isEncoding("gbk");
// console.log(res);

// let obj = {};
// let obj = Buffer.alloc(5);
// let res = Buffer.isBuffer(obj);
// console.log(res);

// let buf = Buffer.from("123");
// let buf = Buffer.from("知播渔");
// let res = Buffer.byteLength(buf);
// console.log(res);
// console.log(buf.length);

let buf1 = Buffer.from("123");
let buf2 = Buffer.from("abc");
let buf3 = Buffer.from("xxx");
let res = Buffer.concat([buf1, buf2, buf3]);
console.log(res);
console.log(res.toString());