let a = 10;

function add(num1, num2) {
  const result = num1 + num2 + a;
  return result;
}
console.log(result); //ReferenceError: result is not defined
const sum = add(10, 20);
console.log(sum);
