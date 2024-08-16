//asynchronous nature of js :it will first execute the script then time out function will be executed
console.log("i am a programmer")
console.log("i love to eat")

setTimeout(()=>{//set the time to execute the function
    console.log("i am inside settimeout")
},0);

setTimeout(()=>{
    console.log("i am inside settimeout2")
},0);
console.log("the end")


//call back

// const callback=(arg)=>{
//     console.log(arg)
// }
// const loadScript=(src,callback) => {
//   let sc=document.createElement("script");
//   sc.src=src;
//   sc.onload=callback("Ansa")
// document.head.append(sc)
// }
// loadScript("")
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumcallback){
// //     sumcallback(a,b);

// }
// calculator(3,4,sum)
// //getting data id
// function getData(dataid,getNextdata){
//     setTimeout(()=>{
//         console.log("data",dataid);
//         if(getNextdata){
//             getNextdata();
//         }
//     },2000);
// }
//if we want that 1st we get get 1 and after 2s delay we get 2 and then after 2s we get 3
//for that case we use call  back:
//this is called callback hell
// getData(1,()=>{//here we use arrow function bec we can not pass parameter in the function getData in callback case
//     getData(2,() => {
//       getData(3);
//     }
//     );
// })


//promises:

// let promise = new Promise((resolve,reject)=>{
//     console.log("i am a promise")
//     // resolve("success")
//     reject("some error occur")
// });

// function getData(dataid,getNextdata){
//     return new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("success")
//             if(getNextdata){
//                 getNextdata();
//             }
//         },2000);
//     });
// }

//.then() and.catch():

// const getPromise=()=>{
//   return   new Promise((resolve,reject)=>{
//              console.log("i am a promise");
//               reject("success");
//     });
// }

// let promise= getPromise();
// promise.then(()=>{//wor
//     console.log("promise fullfilled")
// });
// promise.catch(()=>{// work for reject
//     console.log("i am rejected")
// });

