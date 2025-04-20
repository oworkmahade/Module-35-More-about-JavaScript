// 35-5 Promise, Async/Await
const myLoader = () => {
  return new Promise((resolve, reject) => {
    const value = Math.random();
    if (value < 0.4) {
      resolve(value);
    } else {
      reject(value);
    }
  });
};

myLoader()
  .then((data) => console.log("resolved data", data))
  .catch((err) => console.log("rejected with value", err));

fetch("")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// normal function
async function dataLoader() {
  const res = await fetch("");
  const data = await res.json();
  console.log(data);
}

dataLoader();

// arrow function
const loadData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  console.log(data);
};

loadData();
