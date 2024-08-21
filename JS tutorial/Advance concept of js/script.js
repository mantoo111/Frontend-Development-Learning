// concept os IIFE
async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    })
}
(async function main(){
    let a = await sleep()
    console.log (a)
    let b= await sleep()
    console.log(a)
//concept of destructuring
    let [x,y,...rest]=[1,5,8,7,5,3,0]
    console.log(x,y,rest)

let obj={
    c:1,
    d:2,
    e:3
}
let {c,d}=obj//using curley bracket will give the value of c,d
console.log(c,d)




})()
