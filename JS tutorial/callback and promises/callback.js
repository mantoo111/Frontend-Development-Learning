const arr=[1,2,3,4,5,6];
function calculatorMultiplication(arr=[],callback){
    const ans=[];
    for (let index = 0; index < arr.length; index++) {
       const element=callback(arr[index]);
       ans.push(element);
        
    }
    console.log(ans);
}
// function multiply(a){
//     return a*10;
// }                         -> for these two function there is no need for that we use the arrow function while calling
// function divide(a){
//     return a/10;
// }
calculatorMultiplication(arr,(a) =>a*10 );//callback
  


calculatorMultiplication(arr,(a) =>a/10) ;//callback

//                                          promise:
 const a= new Promise((resolve,reject)=>{
    resolve("success")
    // reject("error")
});
a.then((params) => {
    console.log(params);
  
}
)
.catch((error) => {
    console.log(error);
  
}
)