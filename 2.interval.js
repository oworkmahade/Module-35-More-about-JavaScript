console.log("setTimeout");
console.log(2);
console.log(3);
console.log(4);

setTimeout(() => {
  console.log(5);
}, 4000);

console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

console.log("setInterval");

setInterval(() => {
  console.log("mahade");
}, 2000);
console.log(11);

let num = 0;
const clockId = setInterval(() => {
  num++;
  console.log(num);
  if (num == 5) {
    clearInterval(clockId);
  }
}, 2000);
