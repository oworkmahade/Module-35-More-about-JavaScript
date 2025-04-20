// 35-4 Single -Threaded, Asynchronous vs Multi-Threaded, Synchronous
console.log(1);
console.log(2);
console.log(3);
doSomething();
console.log(5);
console.log(6);

function doSomething() {
  console.log(4);
}

// 1
// 2
// 3
// 4
// 5
// 6

console.log("next part");
console.log(7);
console.log(8);
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log(10);
console.log(11);
console.log(12);

// 7
// 8
// 10
// 11
// 12
// {userId: 1, id: 1, title: 'delectus aut autem', completed: false}

// nb: The fetch API is asynchronous, so the code continues to run while waiting for the response. The console.log statements after the fetch call will execute immediately, while the response will be logged once it is received. This is an example of how JavaScript handles asynchronous operations using callbacks and promises.

console.log("next part 2");
console.log(13);
console.log(14);
console.log(15);
// setTimeout(lazyLogged, 5000);
setTimeout(() => {
  lazyLogged();
}, 5000);
console.log(16);
console.log(17);

function lazyLogged() {
  console.log("lazy logged");
}

// 13
// 14
// 15
// 16
// 17
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// lazy logged

// nb: The setTimeout is asynchronous. The setTimeout function is used to delay the execution of the lazyLogged function by 5 seconds. The code continues to run while waiting for the timeout, so the console.log statements after the setTimeout call will execute immediately. Once the timeout is reached, the lazyLogged function will be called and "lazy logged" will be printed to the console.
