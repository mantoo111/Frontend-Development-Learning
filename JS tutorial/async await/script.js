// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }
// async function main() {
//   console.log("loading module");
//   console.log("do something");
//   console.log("load data");
// }

// let data = await getData();//waits for the data
// console.log(data);
// console.log("process data");

//                      API


async function getData() {
  let x=  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }
  async function main() {
    console.log("loading module");
    console.log("do something");
    console.log("load data");
  }
  
  let data = await getData();//waits for the data
  console.log(data);
  console.log("process data");





