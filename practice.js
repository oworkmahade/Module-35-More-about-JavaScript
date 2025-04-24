// a)	Write a function that displays a message after 5 second.

setTimeout(function msg() {
  console.log("msg displaying after 5 second");
}, 5000);

setTimeout(() => {
  console.log("msg displaying after 5 second");
}, 5000);

// note:
// If you wrap it in a function, you can reuse it, but as-is, it will run once after 5 seconds when the code is executed.

function displayMessage() {
  setTimeout(() => {
    console.log("msg displaying after 5 second");
  }, 5000);
}

// b)	Write a function called delayedGreeting() that takes two parameters, name and delay time, and logs a greeting message after the given delay time.
// Input:
// delayGreeting('Alice’, 2000)
// Output:
// Hello, Alice

displayMessage();

function delayGreeting(name, delay) {
  setTimeout(() => console.log("Hello !", name), delay);
}

delayGreeting("Alice", 2000);

// c)	The function tellJoke() below logs a funny message every 2 seconds and after 10 seconds, it stops. Complete the code below and see the output

// function tellJoke() {
//   clockId = setInterval(() => {
//     console.log(
//       `Why don't scientists trust atome? Because they make up everything !`
//     );
//   }, 2000);
// }

// after 10 second, stop telling jokes

// setTimeout(() => {
//   clearInterval(clockId);
// }, 10000);

// tellJoke();

// You're very close — just a small issue! 🔍
// The problem is: you're calling tellJoke() after the setTimeout, so at the moment setTimeout runs, clockId is not yet defined.

let clockId;

function tellJoke() {
  clockId = setInterval(() => {
    console.log(
      `Why don't scientists trust atoms? Because they make up everything !`
    );
  }, 2000);
}

// after 10 second, stop telling jokes

setTimeout(() => {
  clearInterval(clockId);
}, 10000);

tellJoke();

// d)	Write an async/await function that fetch data from an API and logs a message.

async function loadData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = response.json();
  console.log(data);
}
loadData();
