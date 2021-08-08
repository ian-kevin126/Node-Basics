// let buf = Buffer.from([97, 98, 99]);
// console.log(buf);
// console.log(buf.toString());

// let buf = Buffer.alloc(5); // <Buffer 00 00 00 00 00>
// console.log(buf);
// // buf.write("abcdefg");
// // buf.write("abcdefg", 2);
// buf.write("abcdefg", 2, 2);
// console.log(buf);
// console.log(buf.toString());

let buf1 = Buffer.from("abcdefg");
// let buf2 = buf1.slice();
// let buf2 = buf1.slice(2);
let buf2 = buf1.slice(2,4);
console.log(buf2);
console.log(buf2.toString());
